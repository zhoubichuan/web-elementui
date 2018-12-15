const http = require("http");
const url = require("url");
const querystring = require("querystring");
const { sql_add, sql_delete, sql_update, sql_query } = require("./mysql");
const port = "3000";
const server = http.createServer();
server.listen(port, function() {
  console.log(`已经连接${port}端口`);
});
let result = {
  code: 200
};
let query = (res, req, url, method, result, callback) => {
  if (req.method === method) {
    if (req.url.includes("favicon.ico")) {
      return false;
    }
    console.log("请求路径" + req.url);
    console.log("请求的方式：" + req.method);
    console.log("请求的路径：" + req.url);
    callback && callback();
    res.writeHead(200, {
      "Content-Type": "text/html;charset=utf-8"
    });
    res.write(JSON.stringify(result));
    res.end();
  }
};
let common = {
  //查询全部
  queryAll: (res, req, result, callback) => {
    sql_query(r => {
      result.data = r;
      console.log(result);
      query(res, req, "queryAll", "GET", result, callback);
    });
  },
  //查询单个
  querySingle: (res, req, result, callback) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      sql_query(r => {
        result.data = r;
        query(res, req, "querySingle", "POST", result, callback);
      });
    });
  },
  //添加单个
  addSingle: (res, req, result, callback) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      sql_add(r => {
        query(res, req, "addSingle", "POST", result, callback);
      });
    });
  },
  //删除单个
  deleteSingle: (res, req, result, callback) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      sql_delete(r => {
        query(res, req, "deleteSingle", "POST", result, callback);
      });
    });
  },
  //更新
  update: (res, req, result, callback) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      sql_update(r => {
        query(res, req, "update", "POST", result, callback);
      });
    });
  }
};
server.on("request", function(req, res) {
  // let url = /\/(\w)+\?/g.exec(req.url)[0].slice(1, -1);
  switch (req.method) {
    case "GET":
      common.queryAll(res, req, result, () => {
        sql_query(r => {
          result.data = r;
        });
      });
      break;
    case "POST":
      common.querySingle(res, req, result, () => {
        data = querystring.parse(result.data.toString());
        if (data.math) {
          data.sort = +result.data[result.data.length - 1].sort + 1;
          result.data.push(data);
        } else {
          console.log(JSON.parse(JSON.stringify(result)));
          result = JSON.parse(JSON.stringify(result));
          result.data = result.data.filter(val => {
            return data.name === val.name;
          });
        }
      });
      break;
    case "PUT":
      common.update(res, req, result, () => {
        data = querystring.parse(data.toString());
        result.data = result.data.map(val => {
          if (data.name == val.name) {
            data.sort = +result.data[result.data.length - 1].sort + 1;
            return data;
          } else {
            return val;
          }
        });
      });
      break;
    case "DELETE":
      common.deleteSingle(res, req, result, () => {
        data = querystring.parse(data.toString());
        result.data = result.data.filter(val => {
          return data.name !== val.name;
        });
      });
      break;
  }
});

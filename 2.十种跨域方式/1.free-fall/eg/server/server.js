const http = require("http");
const url = require("url");
const querystring = require("querystring");
const { sql_add, sql_delete, sql_update, sql_query } = require("./mysql");
const port = "3000";
const server = http.createServer();
server.listen(port, function() {
  console.log(`已经连接${port}端口`);
});

let query = (res, req, url, result) => {
  if (req.url.includes("favicon.ico")) {
    return false;
  }
  console.log("请求路径" + req.url);
  console.log("请求的方式：" + req.method);
  console.log("请求的路径：" + url);
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf-8"
  });
  console.log(result);
  res.write(JSON.stringify(result));
  res.end();
};

let common = {
  //查询全部
  queryAll: (res, req, url) => {
    sql_query(r => {
      let result = { code: 200 };
      result.data = r;
      query(res, req, url, result);
    });
  },
  //查询单个
  querySingle: (res, req, url) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      sql_query(r => {
        let result = { code: 200 };
        result.data = r;
        query(res, req, url, result);
      });
    });
  },
  //添加单个
  addSingle: (res, req, url) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    // data = querystring.parse(result.data.toString());
    req.on("end", () => {
      data = querystring.parse(data.toString());
      console.log("请求数据：", data);
      sql_add(data.s_name, data.s_english, data.s_math, r => {
        sql_query(r => {
          let result = { code: 200 };
          result.data = r;
          query(res, req, url, result);
        });
      });
    });
  },
  //删除单个
  deleteSingle: (res, req, url) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      data = querystring.parse(data.toString());
      console.log("请求数据：", data);
      sql_delete(data.id, r => {
        sql_query(r => {
          let result = { code: 200 };
          result.data = r;
          query(res, req, url, result);
        });
      });
    });
  },
  //更新
  update: (res, req, url) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      data = querystring.parse(data.toString());
      console.log("请求数据：", data);
      sql_update(data.id, data.s_name, data.s_english, data.s_math, r => {
        sql_query(r => {
          let result = { code: 200 };
          result.data = r;
          query(res, req, url, result);
        });
      });
    });
  }
};
server.on("request", function(req, res) {
  let arr = ["queryAll", "querySingle", "addSingle", "deleteSingle", "update"];
  for (let i = 0; i < arr.length; i++) {
    if (req.url.includes(arr[i])) {
      common[arr[i]](res, req, arr[i]);
    }
  }
});

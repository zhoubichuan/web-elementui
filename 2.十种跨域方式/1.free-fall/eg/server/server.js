const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer();

let result = {
  code: 200,
  data: [
    { sort: "1", name: "小明", math: 80, english: 100 },
    { sort: "2", name: "小红", math: 90, english: 80 },
    { sort: "3", name: "小王", math: 70, english: 50 },
    { sort: "4", name: "小李", math: 90, english: 60 }
  ]
};
let query = (req, req, url, method, result, callback) => {
  if (req.url.includes(type)) {
    console.log("请求的路径：" + req.url);
    if (req.method === method) {
      console.log("请求的方式：" + req.method);
      callback && callback();
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(JSON.stringify(result));
      res.end();
    }
  }
};
let common={
  //查询全部
  queryAll: (res, req, result)=>{
    query(res,res,'queryAll','GET',result,callback)
  },
  //查询单个
  querySingle: (res, req, result, callback) => {
    let data = "";
    req.on("data", chunk=> {
      data += chunk;
    });
    req.on("end", ()=> {
      query(res, req, 'querySingle', 'POST', result, callback)
    })
  },
  //添加单个
  addSingle: (res, req, result, callback) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      query(res, req, 'addSingle', 'POST', result, callback)
    })
    
  },
  //删除单个
  deleteSingle: (res, req, result, callback) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      query(res, req, 'deleteSingle', 'POST', result, callback)
    })
    
  },
  //更新
  update: (res, req, result, callback) => {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });
    req.on("end", () => {
      query(res, req, 'update', 'POST', result, callback)
    })
    
  },

}
server.on("request", function(req, res) {
  let url = /\/(\w)+\?/g.exec(req.url)[0].slice(1, -1);
  switch (req.url) {
    case "GET":
      common.queryAll(res, req, result)
      break;
    case "POST":
      common.querySingle(res, req, result,()=>{
        data = querystring.parse(data.toString());
        if (data.math) {
          data.sort = +result.data[result.data.length - 1].sort + 1;
          result.data.push(data);
        } else {
          result = JSON.parse(JSON.stringify(result));
          result.data = result.data.filter(val => {
            return data.name === val.name;
          });
        }
      })
      break;
    case "PUT":
      common.update(res, req, result, ()=>{
        data = querystring.parse(data.toString());
        result.data = result.data.map(val => {
          if (data.name == val.name) {
            data.sort = +result.data[result.data.length - 1].sort + 1;
            return data;
          } else {
            return val;
          }
        });
      })
      break;
    case "DELETE":
      common.deleteSingle(res, req, result, ()=>{
        data = querystring.parse(data.toString());
        result.data = result.data.filter(val => {
          return data.name !== val.name;
        });
      })
      break;
  }
});

server.listen(3000, function() {
  console.log("已经连接3000端口");
});
// res.header("Access-Control-Allow-Origin", "http://localhost:4000/");

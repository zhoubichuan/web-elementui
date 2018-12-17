var createError = require("http-errors");
var express = require("express");
var router = express.Router();

//设置请求头
router.all("*", function(req, res, next) {
  // res.header("Access-Content-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-Width");
  // res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By", "3.2.1");
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//路径解析
var path = require("path");
//这就是一个解析cookie的工具，通过req.cookies可以取到传过来的cookie，并把他们转成对象
var cookieParser = require("cookie-parser");
//在控制台中，显示req请求的信息
var logger = require("morgan");
//node中间件，用于处理JSON,Raw，text和url编码的数据
var bodyParser = require("body-parser");

//路由信息（接口地址），存放在routes的根目录
var addRouter = require("./routes/add");
var deleteRouter = require("./routes/delete");
var updataRouter = require("./routes/updata");
var queryRouter = require("./routes/query");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//载入中间件
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//配置路由（自定义路径，上面设置的接口地址）
app.use("/add", addRouter);
app.use("/delete", deleteRouter);
app.use("/updata", updataRouter);
app.use("/query", queryRouter);

// 错误处理
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

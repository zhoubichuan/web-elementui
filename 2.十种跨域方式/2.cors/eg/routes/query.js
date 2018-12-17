var express = require("express");
var router = express.Router();
const { sql_query } = require("../public/mysql");

router.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

router.get("/", function(req, res, next) {
  sql_query(r => {
    let result = { code: 200 };
    result.data = r;
    res.send(result);
  });
});

module.exports = router;

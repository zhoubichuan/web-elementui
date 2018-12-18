var express = require("express");
var router = express.Router();
const { sql_update, sql_query } = require("../public/mysql");
var querystring = require("querystring");

router.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/* GET users listing. */
router.put("/", function(req, res, next) {
  let data = req.body;
  console.log(data);
  sql_update(data.id, data.s_name, data.s_english, data.s_math, r => {
    sql_query(r => {
      let result = { code: 200 };
      result.data = r;
      res.send(result);
    });
  });
});

module.exports = router;

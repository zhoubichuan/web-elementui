var express = require("express");
var router = express.Router();
const { sql_query, sql_add } = require("../public/mysql");
var querystring = require("querystring");
router.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
/* GET home page. */
router.post("/", function(req, res, next) {
  let data = "";
  req.on("data", chunk => {
    data += chunk;
  });
  req.on("end", () => {
    data = querystring.parse(data.toString());
    console.log(data);
    sql_add(data.s_name, data.s_english, data.s_math, r => {
      console.log(r);
      sql_query(r => {
        let result = { code: 200 };
        result.data = r;
        res.send(result);
      });
    });
  });
});

module.exports = router;

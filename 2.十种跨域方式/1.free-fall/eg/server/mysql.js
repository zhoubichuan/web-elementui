const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test1"
});

function sql_add(s_name, s_english, s_math, callback) {
  connection.connect();
  let userAddSql = "INSERT INTO student(s_name,s_english,s_math) VALUES(?,?,?)";
  let userAddSql_params = [s_name, s_english, s_math];
  connection.query(userAddSql, userAddSql_params, function(err, result) {
    callback && callback(result);
    console.log("增加", JSON.stringify(result));
  });
  connection.end();
}
function sql_delete(id, callback) {
  connection.connect();
  let userDeleteSql = "DELETE FROM student";
  connection.query(userDeleteSql, function(err, result) {
    callback && callback(result);
    console.log("删除", JSON.stringify(result));
  });
  connection.end();
}
function sql_update(id, s_name, s_english, s_math, callback) {
  connection.connect();
  let userChangeSql =
    "UPDATA student SET(id,s_name,s_english,s_math) VALUES(?,?,?,?)";
  let userChangeSql_params = [id, s_name, s_english, s_math];
  connection.query(userChangeSql, userChangeSql_params, function(err, result) {
    callback && callback(result);
    console.log("修改", JSON.stringify(result));
  });
  connection.end();
}
function sql_query(callback) {
  connection.connect();
  let userSearchSql = "SELECT * FROM student";
  connection.query(userSearchSql, function(err, result) {
    if (err) {
      console.log("查找失败", err);
    } else {
      console.log("查找", JSON.stringify(result));
      callback && callback(result);
    }
  });
  connection.end();
}
module.exports = {
  sql_add,
  sql_delete,
  sql_update,
  sql_query
};

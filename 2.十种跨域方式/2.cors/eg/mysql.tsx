const mysql: any = require("mysql");
const connection: any = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test1"
});

class Sql {
  constructor(obj) {}
  add(obj) {
    return new Promise((resolve, reject) => {
      connection.connect();
      connection.query(
        `INSERT INTO student(s_name,s_english,s_math) VALUES(${(obj.s_name,
        obj.s_english,
        obj.s_math)})`,
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
      connection.end();
    });
  }
}

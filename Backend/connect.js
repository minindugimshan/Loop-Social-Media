// import mysql from "mysql"

// export const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Minindu2002",
//   database:"loop",
// })

import mysql from "mysql2";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Minindu2002",
  database: "loop",
  // connectionLimit: 10,
});

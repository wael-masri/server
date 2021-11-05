const router = require("express").Router();
const mysql = require("mysql");

// CONNECTION NODEJS AND MYSQL
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "finaltest_db",
});

// GET DATA FROM DATABASE TO REACT BY NODEJS ROUTER
router.get("/get", (req, res) => {
  db.query("SELECT * FROM post", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;

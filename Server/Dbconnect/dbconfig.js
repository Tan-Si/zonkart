require('dotenv').config();//db sql
const mysql = require("mysql2")

//properties connection
var propertiesReader = require('properties-reader');
// var properties = propertiesReader('application.properties');

//connection to DB
const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.DPORT,
  user: process.env.USER,
  password: process.env.PASSWORD.toString(),
  database: process.env.DB
});

connection.connect(function (err) {
  if (err) {
    throw err
  }
  else {
    console.log("Db connected")
  }
});
exports = connection;
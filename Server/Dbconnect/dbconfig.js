require('dotenv').config();//db sql
//properties connection
//var propertiesReader = require('properties-reader');
// var properties = propertiesReader('application.properties');

//console.log(process.env.USER);
//connection to DB
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.DPORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB
});

//connection.execute('select * from user');
  connection.connect(function (err) {
  if (err) {
    throw err
  }
  else {
    console.log("Db connected")
  }
});  
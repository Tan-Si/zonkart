//db sql
const mysql=require("mysql2")

//properties connection
var propertiesReader = require('properties-reader');
var properties = propertiesReader('application.properties');

//connection to DB
const connection = mysql.createConnection({
    host: properties.get('host'),
    port:properties.get('port'),
    user: properties.get('user'),
    password: properties.get('password').toString(),
    database: properties.get('database')
  })
  
  connection.connect(function(err) {
    if (err) 
    {
      throw err

    }
    else{
      console.log("Db connected")
    }
  });
  exports = connection;
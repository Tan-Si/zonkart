require('dotenv').config();
const express = require("express");
const dbconfig=require("./Dbconnect/dbconfig");
const app = express();

//server check
const PORT = process.env.PORT || 3001;
const db=dbconfig()
db.sequelize.sync();
app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
})
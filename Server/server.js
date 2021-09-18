require('dotenv').config();
const express = require("express");
const app = express();

//server check
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
})
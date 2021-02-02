//jshint esversion:6
const port = process.env.port || 3000;

const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(){
    console.log("Server started and listening on port: 3000");
});
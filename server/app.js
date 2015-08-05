var express = require("express");
var path = require("path");
var index = require('./routes/index');

var app = express();

app.set("port", (process.env.PORT || 5000));

app.use('/', index);//anytime you get a request, use index.js

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});
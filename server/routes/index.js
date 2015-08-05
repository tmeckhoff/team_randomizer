
var express = require('express');
var router = express.Router();
var path = require('path');
var peopleData = require('../public/data/people.json');

router.get("/data", function(req, res){
    res.json(peopleData);
});

router.get("/*", function(req, res){///* serve support files
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
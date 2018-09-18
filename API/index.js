var express = require('express');
var app = express();
var body = require('body-parser');
var env = require('./environment/environment')
var envDB = env.db;
var catsController = require("./controllers/catsController");

// ROUTES
var routing = require('./routes/index');
app.use(routing.cats);
app.get('/autic', catsController.index);

// LISTEN
app.listen(envDB.port);
console.log("Node running on port 3000...");
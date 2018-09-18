var express = require('express');
var app = express();
var body = require('body-parser');
var env = require('./environment/environment')

// DB CONNECTION
var mongoose = require('mongoose');
mongoose.connect(env.db.uri, { useNewUrlParser: true });
var db = mongoose.connection;

// ROUTES
var routing = require('./routes/index');
app.use(routing.cats);

app.get('/autic', (req, resp)=>{
    var Category = require('./models/Category');
    // // Category.createCategory({name: "firstttttttttttt", price: 1000}, (err, result)=> {
    // //     resp.json(result);
    // // });
    // Category.readCategories((err, result)=>{
    //     if(err) throw err;
    //     resp.json(result);
    // })
    Category.find((err, result)=>{
        resp.json(result)
    })
});

// LISTEN
app.listen(3000);
console.log("Node running on port 3000...");
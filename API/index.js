var express = require('express');
var app = express();
var body = require('body-parser');

// DB CONNECTION
var mongoose = require('mongoose');
// mongoose.connect("mongodb://test-mnd:VtgKowpbvz1s0m7nwpxERN0Zvsag0MELNSis12UxrVgtMPlUuYHORuNffI1WfXJCSyfQAMRecr99CDq9IEvsNA==@test-mnd.documents.azure.com:10255/?ssl=true&replicaSet=globaldb", { useNewUrlParser: true });
mongoose.connect("mongodb://localhost/autic", { useNewUrlParser: true });
var db = mongoose.connection;

// ROUTES
var routing = require('./routes/index');
app.use(routing.cats);
// app.use(routing.products);

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
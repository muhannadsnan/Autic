var Category = require('../models/Category');

exports.index = function (req, res) {
    Category.readCategories(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
}

exports.create = function (req, res) {
    var newCat = req.body;
    Category.createCategory(newCat, function(err, result){
        if (err) throw err;
        res.json(newCat);
    });
}

exports.show = function(req, res) {
    var query = {"_id": req.params.id};
    Category.find(query, function(err, result) {
        if (err) throw err;
        res.json(result);        
    });
}

exports.update = function (req, res) {
    var query = { _id: req.params.id };
    var updatedCat = req.body;
    updatedCat.updated_at = Date.now();
    Category.updateCategory(query, updatedCat, {}, function(err, result){
        if (err) throw err;
        res.json({ "message": 'Category "' + updatedCat.name + '" was updated successfully' });
    });
}

exports.destroy = function(req, res) {
    var query = {"_id": req.params.id};
    Category.deleteOne(query, function(err, result) {
        if (err) throw err;        
        res.json({ "message": 'Category was deleted successfully' });
    });
}
var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
}/* ,{timestamps:true} */);

var Category = module.exports = mongoose.model('categories', catSchema);

module.exports.createCategory = function(newCat, callback){
    Category.create(newCat, callback);
};

module.exports.readCategories = function(callback, limit){
    Category.find(limit, callback);
};

module.exports.updateCategory = function (condition, updatedCat, options, callback){
    Category.findOneAndUpdate(condition, updatedCat, options, callback);
};
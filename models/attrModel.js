var mongoose = require('mongoose');



var attrSchema = new mongoose.Schema({
    name: String,
    type: String,
    rating: Number,
    pic: [{
        name: String,
        url: String
    }],
    vid: [{
        name: String,
        url: String
    }],
    threeSixty: [{
        name: String,
        url: String
    }]
});




module.exports = mongoose.model("Attr", attrSchema);

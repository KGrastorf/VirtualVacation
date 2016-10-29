var mongoose = require('mongoose');



var attrSchema = new mongoose.Schema({
    name: String,
    type: String,
    tag: String,
    rating: Number,
    pic: {
        name: String,
        url: String,
        tag: String
    },
    vid: {
        name: String,
        url: String,
        tag: String
    },
    threeSixty: {
        name: String,
        url: String,
        tag: String
    }
});


module.exports = mongoose.model("Attr", attrSchema);

var mongoose = require('mongoose');



var attrSchema = new mongoose.Schema({
    name: String,
    type: String,
    tag: String,
    rating: Number,
    greet: String,
    pic: {
        name: String,
        url: String,
        tag: String,
        alt: String
    },
    vid: {
        name: String,
        url: String,
        tag: String,
        alt: String
    },
    threeSixty: {
        name: String,
        url: String,
        tag: String,
        alt: String
    }
});


module.exports = mongoose.model("Attr", attrSchema);

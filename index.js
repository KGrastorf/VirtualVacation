var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var attrCtrl = require('./controllers/attrCtrl.js');


var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get("/attr", attrCtrl.read);
app.post("/attr", attrCtrl.create);
app.put("/attr/:id", attrCtrl.change);
app.delete("/attr/:id", attrCtrl.destroy);


mongoose.connect("mongodb://localhost: 27017/universeDB");
mongoose.connection.once('open', function(){
  console.log("Connected to Mongo");
});

app.listen(3000, function(){
console.log("Touron is listening to 3000");
});

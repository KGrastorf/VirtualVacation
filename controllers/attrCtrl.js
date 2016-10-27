var AttrModel = require("./../models/attrModel.js");



module.exports = {
  read: function(req, res){
    AttrModel
    .find(req.query)
    .populate('stars')
    .exec(function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  create: function(req, res){
    var galaxy = new AttrModel(req.body);
    galaxy.save(function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  change: function(req, res){
    AttrModel
    .findByIdAndUpdate(req.params.id, req.body,
      function(err, result){
        if(err){
          res.send(err);
        }else{
          res.send(result);
        }
      });
  },
  destroy: function(req, res){
    AttrModel
    .findByIdAndRemove(req.params.id, req.body,
      function(err, result){
        if(err){
          res.send(err);
        }else{
          res.send(result);
        }
      });
  }
};

var Service = require('mongoose').model('Service');
var Review = require('mongoose').model('Review');

exports.getServices = function(req, res) {
  Service.find({}).exec(function(err, collection) {
    res.send(collection);
  });
};

exports.createService = function(req, res, next) {
  var serviceData = req.body;
  Service.create(serviceData, function(err, user){
    if(err) {
      if(err.toString().indexOf('E11000') > -1) {
        err = new Error('This service aleady exists');
      }
      res.status(400);
      return res.send({reason:err.toString()});
    }
    res.status(200);
  });
};

exports.deleteService = function(req, res, next) {
  Service.findByIdAndRemove(req.params.id, function(err, user){
    if(err) {
      res.status(400);
      return res.send({reason:err.toString()});
    }
    res.status(203);
  });
};


exports.getServiceById = function(req, res) {
  Service.findOne({_id:req.params.id})
  .populate('reviews')
  .exec(function(err, service) {
    res.send(service);
  });
};

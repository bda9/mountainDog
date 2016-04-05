var Service = require('mongoose').model('Service');
var Review = require('mongoose').model('Review');

exports.getServices = function(req, res) {
  Service.find({}).exec(function(err, collection) {
    res.send(collection);
  });
};

exports.getServiceById = function(req, res) {
  Service.findOne({_id:req.params.id})
  .populate('reviews')
  .exec(function(err, service) {
    // Review.find({_id: {$in: service._doc.reviews._id}}).exec(function(err, reviews){
    // console.log(reviews);
    // service.reviews = reviews;
    res.send(service);
    // });
  });
};

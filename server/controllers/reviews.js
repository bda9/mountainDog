var Review = require('mongoose').model('Review');

exports.getReviews = function(req, res) {
  Review.find({}).exec(function(err, collection) {
    res.send(collection);
  });
};

var Service = require('mongoose').model('Service');

exports.getServices = function(req, res) {
  Service.find({}).exec(function(err, collection) {
    res.send(collection);
  });
};

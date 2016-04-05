var Course = require('mongoose').model('Course');
var Review = require('mongoose').model('Review');

exports.getCourses = function(req, res) {
  Course.find({}).exec(function(err, collection) {
    res.send(collection);
  });
};

exports.createCourse = function(req, res, next) {
  var courseData = req.body;
  Course.create(courseData, function(err, user){
    if(err) {
      if(err.toString().indexOf('E11000') > -1) {
        err = new Error('This course aleady exists');
      }
      res.status(400);
      return res.send({reason:err.toString()});
    }
    res.status(200);
  });
};

exports.deleteCourse = function(req, res, next) {
  Course.findByIdAndRemove(req.params.id, function(err, user){
    if(err) {
      res.status(400);
      return res.send({reason:err.toString()});
    }
    res.status(203);
  });
};


exports.getCourseById = function(req, res) {
  Course.findOne({_id:req.params.id})
  .populate('reviews')
  .exec(function(err, course) {
    res.send(course);
  });
};

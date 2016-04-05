var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    courseModel = require('../models/Course');
    serviceModel = require('../models/Service');
    reviewModel = require('../models/Review');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once("open", function() {
    console.log("Connected to MongoDB!  And your mountainDog!");
    console.log(new Date());
  });

  userModel.createDefaultUsers();
  courseModel.createDefaultCourses();
  serviceModel.createDefaultServices();
  reviewModel.createDefaultReviews();

};

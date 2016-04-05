var auth = require('./auth.js'),
  users = require('../controllers/users'),
  courses = require('../controllers/courses'),
  services = require('../controllers/services'),
  reviews = require('../controllers/reviews'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/courses', courses.getCourses);
  app.post('/api/courses', auth.requiresRole('admin'), courses.createCourse);
  app.delete('/api/courses/:id', auth.requiresRole('admin'), courses.deleteCourse);
  app.get('/api/courses/:id', courses.getCourseById);

  app.get('/api/services', services.getServices);
  app.get('/api/services/:id', services.getServiceById);
  app.get('/api/reviews', reviews.getReviews);
  app.get('/partials/*', function(req, res, next) {
    res.render('partials/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res){
    req.logout();
    res.end();
  });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res, next) {
    res.render('index', {
      bootstrapedUser: req.user
    });
  });
};

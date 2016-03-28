var auth = require('./auth.js'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/users', auth.requiresRole('admin'), function(req, res) {
    User.find({}).exec(function(err, collection){
      res.send(collection);
    });
  });

  app.get('/partials/*', function(req, res, next) {
    res.render('partials/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res){
    req.logout();
    res.end();
  });

  app.get('*', function(req, res, next) {
    res.render('index', {
      bootstrapedUser: req.user
    });
  });
};

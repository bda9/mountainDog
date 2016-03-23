var express = require('express'),
  stylus = require('stylus'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

//Configuration Section
function compile(str, path) {
  return stylus(str).set('filename', path);
}
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(stylus.middleware({
  src: __dirname + '/public',
  compile: compile
}));
app.use(express.static(__dirname + '/public'));


//End of Configuration Section

// Connect to MongoDB....

//mongoose.connect('mongodb://localhost/mountainDog');

  mongoose.connect('mongodb://iandelin:795282@ds021989.mlab.com:21989/mountaindog');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once("open", function() {
  console.log("Connected to MongoDB!  And your mountainDog!");
  console.log(new Date());
});

var messageSchema = mongoose.Schema({
  message: String
});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
  mongoMessage = messageDoc.message;
});


app.get('/partials/:partialPath', function(req, res, next) {
  res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res, next) {
  res.render('index', {
    mongoMessage: mongoMessage
  });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Connected to Express!  Listening on port " + port + "...");

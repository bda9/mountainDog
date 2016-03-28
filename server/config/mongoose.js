var mongoose = require('mongoose');
var crypto = require('crypto');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once("open", function() {
    console.log("Connected to MongoDB!  And your mountainDog!");
    console.log(new Date());
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    hashed_pwd: String,
    roles: [String]
  });
  userSchema.methods = {
    authenticate: function(passwordToMatch) {
      return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  };
  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var salt, hash;
      salt = createSalt();
      hash = hashPwd(salt, 'dave');
      User.create({firstName: 'David', lastName: 'A', username: 'dave', salt: salt, hashed_pwd: hash, roles: ['admin']});
      salt = createSalt();
      hash = hashPwd(salt, 'tom');
      User.create({firstName: 'Tom', lastName: 'A', username: 'tom', salt: salt, hashed_pwd: hash, roles: []});
      salt = createSalt();
      hash = hashPwd(salt, 'dan');
      User.create({firstName: 'Dan', lastName: 'A', username: 'dan', salt: salt, hashed_pwd: hash});
    }
  });
};

function createSalt() {
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
  var hmac = crypto.createHmac('sha1', salt);
  hmac.setEncoding('hex');
  hmac.write(pwd);
  hmac.end();
  return hmac.read();
}

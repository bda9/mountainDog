var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
  development: {
    db: 'mongodb://localhost/mountainDog',
    rootPath: rootPath,
    port: process.env.PORT || 3005
  },
  production: {
    db: 'mongodb://iandelin:795282@ds021989.mlab.com:21989/mountaindog',
    rootPath: rootPath,
    port: process.env.PORT || 80

  }
};

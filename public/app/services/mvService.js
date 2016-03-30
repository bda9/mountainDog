angular.module('app').factory('mvService', function($resource) {
  var ServiceResource = $resource('/api/services/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });
  return ServiceResource;
});

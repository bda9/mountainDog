angular.module('app').factory('mvService', function($resource) {
  var ServiceResource = $resource('/api/services/:id', {id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });
  return ServiceResource;
});

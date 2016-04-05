angular.module('app').factory('mvReview', function($resource) {
  var ReviewResource = $resource('/api/reviews/:id', {id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return ReviewResource;
});

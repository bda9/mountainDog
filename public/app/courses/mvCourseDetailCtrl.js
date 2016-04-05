angular.module('app').controller('mvCourseDetailCtrl', function($scope, mvCourse, $routeParams) {
  $scope.course = mvCourse.get({id:$routeParams.id});
});

angular.module('app').controller('mvMainCtrl', function($scope, mvCourse, mvService) {
  $scope.courses = mvCourse.query();
  $scope.services = mvService.query();
});

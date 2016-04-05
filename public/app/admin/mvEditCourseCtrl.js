angular.module('app').controller('mvEditCourseCtrl', function($scope, mvCourse, mvAuth, mvNotifier) {

  $scope.courses = mvCourse.query();
  $scope.showEdit = false;
  $scope.create = function() {
    var newCourseData = {
      name: $scope.courseName,
      startDate: $scope.startDate,
      cost: $scope.cost,
      description: $scope.description
    };
    mvAuth.createCourse(newCourseData).then(function() {
      mvNotifier.notify('Course has been created');
    }, function(reason) {
      mvNotifier.error(reason);
    });
    window.location.reload();
  };

  $scope.delete = function(index) {
    console.log($scope.courses[index]._id);
    var idToDel = $scope.courses[index]._id;
    mvAuth.deleteCourse(idToDel).then(function() {
      mvNotifier.notify('Course deleted');
      $scope.courses.splice(index, 1);
    }, function(reason) {
      mvNotifier.error(reason);
    });
    window.location.reload();
  };
});

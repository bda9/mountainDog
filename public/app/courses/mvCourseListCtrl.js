angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse){
  $scope.courses = mvCourse.query();

  $scope.sortOptions = [{value:"name",text: "Sort by Title"},
    {value: "startDate", text: "Sort by Start Date"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});

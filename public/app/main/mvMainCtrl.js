angular.module('app').controller('mvMainCtrl', function($scope, mvCourse) {
  $scope.courses = mvCourse.query();
  $scope.services = [
    {name: 'Nail Trimming', featured: true, cost: 5},
    {name: 'Dog Grooming', featured: true, cost: 5},
    {name: 'Day Care', featured: true, cost: 10},
    {name: 'Boarding', featured: true, cost: 22},
    {name: 'Dog Walking', featured: true, cost: 5}
  ];
});

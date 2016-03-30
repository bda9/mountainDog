angular.module('app').controller('mvServiceListCtrl', function($scope, mvService){
  $scope.services = mvService.query();
});

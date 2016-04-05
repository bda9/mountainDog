angular.module('app').controller('mvServiceDetailCtrl', function($scope, mvService, $routeParams) {
  $scope.service = mvService.get({id:$routeParams.id});
});

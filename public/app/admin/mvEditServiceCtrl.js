angular.module('app').controller('mvEditServiceCtrl', function($scope, mvService, mvNotifier) {
  $scope.services = mvService.query();
});

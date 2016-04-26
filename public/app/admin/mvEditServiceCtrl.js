angular.module('app').controller('mvEditServiceCtrl', function($scope, $window, mvService, mvAuth, mvNotifier) {

  $scope.services = mvService.query();
  $scope.showEdit = false;
  $scope.create = function() {
    var newServiceData = {
      name: $scope.serviceName,
      featured: $scope.serviceFeatured,
      cost: $scope.cost,
      description: $scope.description
    };
    mvAuth.createService(newServiceData).then(function() {
      mvNotifier.notify('Service has been created');
    }, function(reason) {
      mvNotifier.error(reason);
    });
    window.location.reload();
  };

  $scope.delete = function(index) {
    console.log($scope.services[index]._id);
    var idToDel = $scope.services[index]._id;
    mvAuth.deleteService(idToDel).then(function() {
      mvNotifier.notify('Service deleted');
      $scope.services.splice(index, 1);
    }, function(reason) {
      mvNotifier.error(reason);
    });
    window.location.reload();
  };
});

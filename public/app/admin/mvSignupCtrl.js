angular.module('app').controller('mvSignupCtrl', function($scope, mvUser, mvNotifier, $location, mvAuth) {
  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      firstName: $scope.fname,
      lastName: $scope.lname,
      phone: $scope.phone,
      dogName: $scope.dogName,
      dogAge: $scope.dogAge,
      dogSex: $scope.dogSex,
      breed: $scope.breed,
      size: $scope.size

    };

    mvAuth.createUser(newUserData).then(function() {
      mvNotifier.notify('User account created!');
      $location.path('/');
    }, function(reason) {
      mvNotifier.error(reason);
    });
  };
});

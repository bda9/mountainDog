angular.module('app').controller('mvProfileCtrl', function($scope, mvAuth, mvIdentity, mvNotifier) {
  $scope.email = mvIdentity.currentUser.username;
  $scope.fname = mvIdentity.currentUser.firstName;
  $scope.lname = mvIdentity.currentUser.lastName;
  $scope.phone = mvIdentity.currentUser.phone;
  $scope.dogName = mvIdentity.currentUser.dogName;
  $scope.dogAge = mvIdentity.currentUser.dogAge;
  $scope.dogSex = mvIdentity.currentUser.dogSex;
  $scope.breed = mvIdentity.currentUser.breed;
  $scope.size = mvIdentity.currentUser.size;

  $scope.update = function() {
    var newUserData = {
      username: $scope.email,
      firstName: $scope.fname,
      lastName: $scope.lname,
      phone: $scope.phone,
      dogName: $scope.dogName,
      dogAge: $scope.dogAge,
      dogSex: $scope.dogSex,
      breed: $scope.breed,
      size: $scope.size

    };
    if($scope.password && $scope.password.length > 0) {
      newUserData.password = $scope.password;
    }
    mvAuth.updateCurrentUser(newUserData).then(function() {
      mvNotifier.notify('Your user account has been updated');
    }, function(reason) {
      mvNotifier.error(reason);
    });
  };
});

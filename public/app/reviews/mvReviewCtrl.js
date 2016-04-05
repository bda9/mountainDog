angular.module('app').controller('mvReviewCtrl', function($scope, mvReview) {
  $scope.reviews = mvReview.query();
});

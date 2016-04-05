angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
  var routeRoleChecks = {
    admin: {auth: function(mvAuth) {
        return mvAuth.authorizeCurrentUserForRoute('admin');
      }
    },
    user: {auth: function(mvAuth) {
        return mvAuth.authorizeAuthenticatedUserForRoute();
      }
    }
  };

  $locationProvider.html5Mode({enabled: true, requireBase: false});
  $routeProvider
    .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})

    .when('/admin/users', { templateUrl: '/partials/admin/user-list',
    controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin})

    .when('/admin/editCourses', { templateUrl: '/partials/admin/editCourses',
    controller: 'mvEditCourseCtrl', resolve: routeRoleChecks.admin})

    .when('/admin/editServices', { templateUrl: '/partials/admin/editServices',
    controller: 'mvEditServiceCtrl', resolve: routeRoleChecks.admin})

    .when('/signup', {templateUrl: '/partials/account/signup',
    controller: 'mvSignupCtrl'
  })
    .when('/profile', {templateUrl: '/partials/account/profile',
    controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
  })
    .when('/courses', {templateUrl: '/partials/courses/course-list',
    controller: 'mvCourseListCtrl'
  })
    .when('/courses/:id', {templateUrl: '/partials/courses/course-details',
    controller: 'mvCourseDetailCtrl'
  })
    .when('/services', {templateUrl: '/partials/services/service-list',
    controller: 'mvServiceListCtrl'
  })
    .when('/services/:id', {templateUrl: '/partials/services/service-details',
    controller: 'mvServiceDetailCtrl'
  })
    .when('/reviews', {templateUrl: '/partials/reviews/review-list',
    controller: 'mvReviewCtrl'
  });
});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  });
});

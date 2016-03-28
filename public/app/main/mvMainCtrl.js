
angular.module('app').controller('mvMainCtrl', function($scope) {
  $scope.courses = [
    {name: 'Housebreaking', featured: true, startDate: new Date('4/4/2016')},
    {name: 'Loose Leash Walking', featured: true, startDate: new Date('4/18/2016')},
    {name: 'Using an e-collar', featured: true, startDate: new Date('4/12/2016')},
    {name: 'Dog Health and Hygiene', featured: true, startDate: new Date('5/11/2016')},
    {name: 'Puppy Socialization and Stimulation', featured: true, startDate: new Date('6/1/2016')},
    {name: 'Basic Dog Manners', featured: true, startDate: new Date('4/15/2016')},
    {name: 'Intermediate Dog Manners', featured: true, startDate: new Date('4/29/2016')},
    {name: 'Advanced Dog Manners', featured: true, startDate: new Date('5/13/2016')},
    {name: 'Free Intro to Dog Training', featured: true, startDate: new Date('7/5/2016')},
    {name: 'Backyard Sports & Games', featured: true, startDate: new Date('2/4/2016')}
  ];
  $scope.services = [
    {name: 'Nail Trimming', featured: true, cost: 5},
    {name: 'Dog Grooming', featured: true, cost: 5},
    {name: 'Day Care', featured: true, cost: 10},
    {name: 'Boarding', featured: true, cost: 22},
    {name: 'Dog Walking', featured: true, cost: 5}
  ];
});

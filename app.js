var app = angular.module('assignments', []);

app.factory('Homework', function () {

    return [{
        assignment: 'Test First JavaScript',
        url: 'https://github.com/aaronhilton/FullstackTestFirst-master',
        status: 'completed'
    },
        {
            assignment: 'Angular Day 1',
            url: 'https://github.com/BatMiles/flashcards-day1',
            status: 'completed'
        },

        {
            assignment: 'Angular Day 2',
            url: 'https://github.com/BatMiles/flash-card',
            status: 'completed'
        },

        {
            assignment: 'Angular Day 3',
            url: '#',
            status: 'not completed'
        }];


});

app.controller('MainController', function ($scope, Homework) {
    $scope.assignments = Homework;
    $scope.moreInfo= function (assignment) {
        assignment.show = correct;
    };

});

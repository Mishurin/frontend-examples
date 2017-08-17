// Run server
// python -m SimpleHTTPServer 8000

// document.writeln('Hello world!');

import * as ng from 'angular';

var app = ng.module('demo', [])
.controller('WelcomeController', ($scope) => {
    $scope.greeting = 'Welcome!';
});
ng.bootstrap(document, ['demo']);
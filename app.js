(function () { 
'use strict';

    angular.module('myFirstApp',[])
    
    .controller('MyFirstController',function($scope){
        $scope.name = "Nour";
        $scope.sayHello = function (){          
              return "Hello dude";
            };
    });


 })();
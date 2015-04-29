/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('MovieController', function($scope, FirebaseService) {
        $scope.movies = FirebaseService.getMovies();
        
        $scope.name = '';
        $scope.director = '';
        $scope.release = '';
        $scope.description = '';
        
        $scope.send = function() {
            FirebaseService.addMovie({
                name : $scope.name,
                director : $scope.director,
                release : $scope.release,
                description : $scope.description
            })
            $scope.name = $scope.director = $scope.release = $scope.description = '';
        }
})




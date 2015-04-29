/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.service('FirebaseService', function($firebase) {
        var fb = new Firebase('https://weso-movie.firebaseio.com/movies');
        var sync = $firebase(fb);
        var data = sync.$asArray();
        
        this.getMovies = function() {
            return data;
        };
        
        this.addMovie = function(movie) {
            if(movie.name!='' && movie.name!= null &&
               movie.release!='' && movie.release!= null &&
               movie.description!='' && movie.description!= null &&
               movie.director!='' && movie.director!= null) {
                data.$add(movie);
            }
        };
        
});

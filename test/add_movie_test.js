describe('Add movie', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
  	
    	module('MovieLib');

    	FirebaseServiceMock = (function(){
            var movies = [{ name:'leffa1',
                            director :'d1',
                            release: '1999',
                            description: 'good'
                        },{
                            name:'leffa2',
                            director :'d2',
                            release: '2000',
                            description: 'better'
                        }];
            return {
                       getMovies : function() {
                           return movies;
                       },
                       addMovie : function(movie) {
                           movies.push(movie);
                       }
            }
		})();

            spyOn(FirebaseServiceMock, 'addMovie').andCallThrough();
    	
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      controller = $controller('MovieController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });

  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
  	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
  	* on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
  	* toBeCalled-oletusta.
	*/
	it('should be able to add a movie by its name, director, release date and description', function(){
                
                scope.name = 'leffa3';
                scope.director = 'd3';
                scope.release = '2001';
                scope.description = 'best';
                scope.send();
                expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();
		expect(scope.movies.length).toBe(3);
	});

	/*	
	* Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
	* EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
	* not.toBeCalled-oletusta (muista not-negaatio!).
	*/
	it('should not be able to add a movie if its name, director, release date or description is empty', function(){
		expect(true).toBe(false);
	});
});
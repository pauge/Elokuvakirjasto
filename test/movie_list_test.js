describe('Movie list', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
    	module('MovieLib');

    	FirebaseServiceMock = (function(){
            var movielist = [{ name:'leffa1',
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
                                    return movielist;
                                },
                                addMovie : function(movie) {
                                    movielist.push(movie);
                                }
			}
		})();


	    spyOn(FirebaseServiceMock, 'getMovies').andCallThrough();
    	
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
  	* Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/ 
	it('should list all movies from the Firebase', function(){
		expect(scope.movies.length).toBe(2);
                expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
	});

	/* 
	* Testaa, että elokuvan pystyy poistamaan Firebasesta.
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to remove a movie', function(){
		expect(true).toBe(false);
	});
});
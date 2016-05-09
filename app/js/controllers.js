movie_search.controller('MainSearchController',['$scope', '$http', '$routeParams','$log', function($scope,$http,$routeParams, $log){
  $log.info($routeParams);
  $http.get('https://www.omdbapi.com/?s=' + $routeParams.title).then(function(response) {
    $log.info(response);
    $scope.movies = response.data.Search;
  }).catch(function(err){
    $log.info(err);
  });
}]);

movie_search.controller('ShowController',['$scope', '$http', '$routeParams','$log', function($scope,$http,$routeParams,$log){
  $http.get('https://www.omdbapi.com/?i=' + $routeParams.id).then(function(response) {
    $log.info('show res', response);
    $scope.oneMovie = response.data;
  }).catch(function(err){
    $log.info(err);
  });
}]);

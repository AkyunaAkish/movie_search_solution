movie_search.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/movies/:title', {
    templateUrl: 'partials/main_search.html',
    controller: 'MainSearchController'
  })
  .when('/show/:id', {
    templateUrl: 'partials/show_page.html',
    controller: 'ShowController'
  })
  .otherwise('/');
});

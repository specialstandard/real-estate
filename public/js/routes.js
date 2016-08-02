app.config( function( $routeProvider ){
  $routeProvider
    .when( '/', {
      templateUrl: 'public/views/main.html',
      controller: 'MainController'
    })
    .otherwise('/')
})

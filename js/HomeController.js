var ShorterApp = angular.module('ShorterApp', []);
ShorterApp.controller('ShorterCtrl', function($scope, $http) {
 var a = {
     user: "User1",
     link:[{name: "http://localhost:1337", shortLink: "-"}]
};
$scope.linkName = '';
$scope.b = a;




 $scope.sendPost = function() {


   var data = {link: $scope.linkName};
  $http.post('/api/link', data).then(function (data,status){
    var c = data.data.shortLink;
    $scope.b.link.push({
      name: $scope.linkName,
      shortLink: c
    })
console.log($scope.b);
  });

  };
});

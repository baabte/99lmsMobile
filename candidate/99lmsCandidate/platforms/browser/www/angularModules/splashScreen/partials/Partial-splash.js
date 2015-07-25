angular.module('candidate').controller('SplashCtrl',['$scope','$cordovaNetwork',function($scope,$cordovaNetwork){

document.addEventListener("deviceready", function () {
 
	// var type = $cordovaNetwork.getNetwork();
$cordovaNetwork.isOnline().then(function(isConnected) {
    alert(isConnected);
  }).catch(function(err){
    console.log(err);
  });


}, false);

}]);
angular.module('candidate').controller('SplashCtrl',['$scope','$cordovaNetwork',function($scope,$cordovaNetwork){

//document.addEventListener("deviceready", function () {
 
	// var type = $cordovaNetwork.getNetwork();

    var isOnline = $cordovaNetwork.isOnline();

    var isOffline = $cordovaNetwork.isOffline();

    console.log(type,isOnline,isOffline);


//}, false);

}]);
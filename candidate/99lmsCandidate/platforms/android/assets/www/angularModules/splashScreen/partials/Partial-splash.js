angular.module('candidate').controller('SplashCtrl',['$scope','$cordovaNetwork','$state',function($scope,$cordovaNetwork,$state){

document.addEventListener("deviceready", function () {
 
	// var type = $cordovaNetwork.getNetwork();

    var isOnline =$cordovaNetwork.isOnline();

    setTimeout(function (argument) {
    	if(isOnline){
            navigator.notification.alert(
			    'You are the winner!',  // message
			    function(a){console.log(a)},         // callback
			    'Game Over',            // title
			    'Done'                  // buttonName
			);
    	}else{
    		
    	}
    	$state.go('home');
    },3000);


}, false);

}]);
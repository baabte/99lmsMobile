angular.module('candidate').controller('HomeCtrl',['$scope','$state','$cordovaNetwork','localStorageService',function($scope,$state,$cordovaNetwork,localStorageService){

if(angular.equals(localStorageService.get('logDatas'),null)||angular.equals(localStorageService.get('logDatas'),{})){
	$state.go('login');
}
// console.log(localStorageService.get('logDatas'));
$scope.openApp = function () {

	//app will work only if the device is connected to internet.
	var isOnline =$cordovaNetwork.isOnline();

    setTimeout(function (argument) {
    	if(isOnline){
		   $state.go('app');
    	}else{
    		navigator.notification.alert(
			'You are offline now, please connect to internet and try again.',// message
			    function(a){console.log(a)},// callback
			    'Offline..!', // title
			    'Ok'// buttonName
			);
    	}
    },3000);
	
};
}]);
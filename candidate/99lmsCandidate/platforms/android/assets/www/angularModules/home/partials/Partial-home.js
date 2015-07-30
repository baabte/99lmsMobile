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

// a confirmation message for logout
// this will not work in emulator, in emulator you have to change the button value to 2 to make this working
$scope.logout = function () {
	navigator.notification.confirm('Do you really want to logout ?', function(button) {
			console.log(button);
            if ( button == 1 ) {
                localStorageService.add('logDatas',{});
                localStorageService.add('activeUserData',{});
                $state.go('login');
            }
        });
};

$scope.info = function (){
	var userData = localStorageService.get('activeUserData');
	email = userData.ActiveUserData.eMail;

	navigator.notification.alert(
			'You are now logged in as '+email,// message
			    function(a){console.log(a)},// callback
			    'User info', // title
			    'Ok'// buttonName
			);


};
}]);
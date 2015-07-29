angular.module('candidate').controller('AppCtrl',['$scope','$state','localStorageService','$localStorage',function($scope,$state,localStorageService,$localStorage){

$scope.$watch(function () {
	return localStorageService.clear;
},function (argument) {
	if(angular.equals(localStorageService.get('logDatas'),null)||angular.equals(localStorageService.get('logDatas'),{})){
	$state.go('login');
}
});

$scope.gotoHome = function () {
	$state.go('home');
};
}]);
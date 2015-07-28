angular.module('candidate').controller('AppCtrl',['$scope','$state',function($scope,$state){

$scope.gotoHome = function () {
	$state.go('home');
};
}]);
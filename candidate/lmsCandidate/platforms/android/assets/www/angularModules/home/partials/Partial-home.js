angular.module('candidate').controller('HomeCtrl',['$scope','$state',function($scope,$state){
$scope.openApp = function () {
	$state.go('app');
};
}]);
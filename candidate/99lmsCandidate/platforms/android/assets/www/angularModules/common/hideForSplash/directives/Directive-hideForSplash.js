angular.module('candidate').directive('hideForSplash',['$state', function($state) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs, fn) {
			if(angular.equals($state.current.name,'splash')){
				$(element).hide();
			}
			// alert($state.current.name);
			// $(element).hide();
			var state = angular.copy($state);
			console.log(state,$state);

		}
	};
}]);
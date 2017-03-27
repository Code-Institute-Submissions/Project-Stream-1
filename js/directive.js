angular.module('gondolaDirectives', [])
	.directive('gondolaNav', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/gondolaNav.html'
		};
	})
	.directive('backgroundDiv', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/backgroundDiv.html'
		};
	});

	


(function() {
	angular.module('job-sweet', ['ui.router']).config(RouterConfig);

	function RouterConfig($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/home',
			template: `<h1>Sweet home!</h1>`
		});
	}
})();

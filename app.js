var beatTracker = angular.module('beatTracker', ['ui.router']);

beatTracker.config(function($stateProvider){
	$stateProvider.state('home', {
		url:"",
		templateUrl: "partials/home.html"
	});
	$stateProvider.state('home.beats', {
		url:"/beats/:beatId",
		templateUrl: "partials/beats.html",
		controller: "ReporterCtrl"
	}); 
});


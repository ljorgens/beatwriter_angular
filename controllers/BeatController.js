beatTracker.controller('BeatCtrl', function BeatCtrl($scope, BeatFactory){
	$scope.beats = BeatFactory.beats;
	$scope.BeatFactory = BeatFactory;
});
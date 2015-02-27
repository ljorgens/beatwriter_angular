beatTracker.controller('ReporterCtrl', function ReporterCtrl($scope, $stateParams, BeatFactory, UtilityFactory){
	$scope.beat = UtilityFactory.findById(BeatFactory.beats, $stateParams.beatId);
});
beatTracker.controller('ReporterCtrl', function ReporterCtrl($scope, $stateParams, BeatFactory, UtilityFactory){
	$scope.beat = UtilityFactory.findById(BeatFactory.beats, $stateParams.beatId);
	$scope.assignReporter = function(){
		$scope.beat.reporters.push({ name: $scope.reporterName, birthday: $scope.addBirthday, employment: $scope.addEmployment});
		$scope.reporterName = null;
		$scope.addBirthday = null;
		$scope.addEmployment = null;
	}
});
beatTracker.factory('BeatFactory', function BeatFactory(){
	var factory = {};
	factory.beats = [];
	factory.addBeat = function() {
		factory.beats.push({ name: factory.beatName, reporters: [] });
		factory.beatName = null;
	};
	return factory;
});
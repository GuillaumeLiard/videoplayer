(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log('index');
//initialise the video with the plugin and initial settings
var video = videojs("vid1", {
	plugins: {
		abLoopPlugin: {
			start: 50 //in seconds - defaults to 0
			, end: 55 //in seconds. Set to  false to loop to end of video. Defaults to false
			, enabled: false //defaults to false
			, loopIfBeforeStart: false //allow video to play normally before the loop section? defaults to true
			, loopIfAfterEnd: true // defaults to true
			, pauseAfterLooping: false //if true, after looping video will pause. Defaults to false
			, pauseBeforeLooping: false //if true, before looping video will pause. Defaults to false
			, createButtons: true //defaults to true
		}
	}
});

video.play();

setTimeout(function () {
	console.log("setting new start and end...");
	video.abLoopPlugin.setStart().setEnd(8).enable();
}, 2000);

video.abLoopPlugin.onLoopCallBack = function (api, player) {
	var opts = api.getOptions();
	console.log("Looping back to %s sec on %s", opts.start, player.currentSrc());
	api.setOptions({ 'pauseAfterLoop': true });
	api.setStart(5);
	api.setEnd(15);
};

},{}]},{},[1])

//# sourceMappingURL=build.js.map

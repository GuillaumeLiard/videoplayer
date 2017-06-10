import videojs from 'video.js';

var myPlayer = videojs('vid1');

myPlayer.src("http://vjs.zencdn.net/v/oceans.mp4");
myPlayer.ready(function() {
  myPlayer.play();
});









// //initialise the video with the plugin and initial settings
// var video = videojs("vid1",{
// 	plugins: {
// 		abLoopPlugin: {
// 			start:50    	//in seconds - defaults to 0
// 			,end:55    	//in seconds. Set to  false to loop to end of video. Defaults to false
// 			,enabled:false			//defaults to false
// 			,loopIfBeforeStart:false //allow video to play normally before the loop section? defaults to true
// 			,loopIfAfterEnd:true	// defaults to true
// 			,pauseAfterLooping: false     	//if true, after looping video will pause. Defaults to false
// 			,pauseBeforeLooping: false     	//if true, before looping video will pause. Defaults to false
// 			,createButtons: true		//defaults to true
// 		}
// 	}
// });
//
// video.play();
//
// setTimeout(function() {
// 	console.log("setting new start and end...");
// 	video.abLoopPlugin.setStart().setEnd(8).enable();
// } , 2000);
//
// video.abLoopPlugin.onLoopCallBack = function(api,player){
// 	var opts = api.getOptions();
// 	console.log("Looping back to %s sec on %s",opts.start, player.currentSrc() );
// 	api.setOptions({'pauseAfterLoop': true});
// 	api.setStart(5);
// 	api.setEnd(15);
// };

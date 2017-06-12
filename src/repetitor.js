class Repetitor {
    constructor(){
        alert('constructor3');
    }
    start(){
        let speed = 0.75;
        let deltaSpeed = 0.01;
        let playbackRate;
        let that;

        let video = videojs("vid1",{
            techOrder: ["youtube"],
            sources: [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=j5-yKhDd64s"}],
        	plugins: {
        		abLoopPlugin: {
        			start:22    	//in seconds - defaults to 0
        			,end:30    	//in seconds. Set to  false to loop to end of video. Defaults to false
        			,enabled:false			//defaults to false
        			,loopIfBeforeStart:false //allow video to play normally before the loop section? defaults to true
        			,loopIfAfterEnd:true	// defaults to true
        			,pauseAfterLooping: false     	//if true, after looping video will pause. Defaults to false
        			,pauseBeforeLooping: false     	//if true, before looping video will pause. Defaults to false
        			,createButtons: true		//defaults to true
        		}
        	}
        }).ready(function(){
          that = this;
          that.playbackRate(speed);
          video.abLoopPlugin.setStart(23).setEnd(26).enable();
        });

        Hamster(window).wheel((event, delta, deltaX, deltaY) => {
          speed = speed + delta * deltaSpeed;
          that.playbackRate(speed);
          console.log('playbackRate : ' + speed);
        });

        // video.play();
    }
}

export default Repetitor;

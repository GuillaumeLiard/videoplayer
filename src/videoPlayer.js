import $ from 'jquery';

let speed = 0.75;
let deltaSpeed = 0.01;
let that;
let video;

class VideoPlayer {
    // constructor(){
    // }
    start(){
        this.renderSpeed(speed);
        video = videojs("vid1",{
            // sources: [{"src": "http://vjs.zencdn.net/v/oceans.mp4"}],
            techOrder: ["youtube"],
            sources: [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=j5-yKhDd64s"}],
            plugins: {
                abLoopPlugin: {
                    // start:22    	//in seconds - defaults to 0
                    // ,end:30    	//in seconds. Set to  false to loop to end of video. Defaults to false
                    enabled:false			//defaults to false
                    ,loopIfBeforeStart:true //allow video to play normally before the loop section? defaults to true
                    ,loopIfAfterEnd:true	// defaults to true
                    ,pauseAfterLooping: false     	//if true, after looping video will pause. Defaults to false
                    ,pauseBeforeLooping: false     	//if true, before looping video will pause. Defaults to false
                    ,createButtons: true		//defaults to true
                }
            }
        }).ready(function(){
            that = this;
            that.playbackRate(speed);
            // video.abLoopPlugin.setStart(23).setEnd(26).enable();
        });
        Hamster(window).wheel((event, delta, deltaX, deltaY) => {
            speed = speed + delta * deltaSpeed;
            that.playbackRate(speed);
            this.renderSpeed(speed.toString().slice(0, 4));
            console.log('playbackRate : ' + speed);
        });

        $(document).on('set:loop', (a, options) => {
            alert('setLoop' + options[0] + ' ee' + options[1]);
        })
    }
    setLoop(start, end){
        video.abLoopPlugin.setStart(start).setEnd(end).enable();
        console.log('start'+start+'end'+end);
    }
    renderSpeed(s){
        console.log('renderSpeed');
        $('#speed').text(s);
    }

}

export default VideoPlayer;

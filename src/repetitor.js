import $ from 'jquery';
import VideoPlayer from './videoPlayer';

class Repetitor {
    constructor(lyrics){
        this.phrases = lyrics.phrases;
    }
    start(){
        this.startVideoPlayer();
        this.render();
        this.listen();
    }
    render(){
        this.renderPhrases();
    }
    listen(){
        this.listenToPhrases();
    }
    renderPhrases(){
        let e = '';
        this.phrases.forEach((value, key) => {
            e += '<div class="phrase" data-id="' + key + '"> ' + value.text + '</div>';
        });
        $('.phrases').append(e);
    }
    listenToPhrases(){
        $('.phrase').on("click",(a) => {
            let j = $(a.currentTarget);
            $('.phrase').removeClass('phrase_active');
            j.addClass('phrase_active');
            let id = j.data('id');
            let phrase = this.phrases[id];
            this.setLoop(phrase.start, phrase.end);
        });
    }
    setLoop(start, end){
        if (this.videoPlayer){
            this.videoPlayer.setLoop(start, end);
        }
    }
    startVideoPlayer(){
        this.videoPlayer = new VideoPlayer();
        this.videoPlayer.start();
    }
}

export default Repetitor;

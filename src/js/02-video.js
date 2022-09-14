import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_STORAGE_TIME = "videoplayer-current-time";

continueVideo()

player.on('timeupdate', throttle(onSetItem, 1000));


function onSetItem(event) {
    localStorage.setItem(LOCAL_STORAGE_TIME, event.seconds)
    
}

function continueVideo() { 
    const timePlaying = localStorage.getItem(LOCAL_STORAGE_TIME)

    player.setCurrentTime(timePlaying)
}
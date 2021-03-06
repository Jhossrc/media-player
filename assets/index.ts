import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/autoPause';
import AdsPlugin from './plugins/Ads/index';

const video = document.querySelector('video');
const buttonPlay : HTMLElement = document.getElementById('play');
const buttonMute: HTMLElement = document.getElementById('mute');

const player = new MediaPlayer({
    element: video,
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new AdsPlugin()
    ]
});

buttonPlay.onclick = () => player.togglePlay(buttonPlay);
video.onclick = () => player.togglePlay(buttonPlay);
buttonMute.onclick = () => player.toggleMute(buttonMute);
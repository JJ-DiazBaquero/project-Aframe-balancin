const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// load some sound
const audioElement = document.querySelector('audio');
const source = audioCtx.createMediaElementSource(audioElement);


const playButton = document.querySelector('#playButton');
var isPlaying = false;
console.log(playButton);
const play  = function() {
	console.log('click play');
	// check if context is in suspended state (autoplay policy)
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}
	
	if (!isPlaying) {
		audioElement.play();
		isPlaying = true;
	// if track is playing pause it
	} else {
		audioElement.pause();
		isPlaying = false;
	}	
};

var analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);

const getDataButton = document.querySelector('#getDataButton');
const getData = function() {
    console.log(analyser);
    console.log(analyser.getByteTimeDomainData(dataArray));
    console.log(dataArray);
};

window.addEventListener('keydown', function (evt) {
    if (evt.key == " "){
        console.log('call play')
        play();
    }
    if (evt.key == "o"){
        getData();
    }
});

source.connect(analyser).connect(audioCtx.destination);

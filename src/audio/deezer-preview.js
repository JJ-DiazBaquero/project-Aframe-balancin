const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// load some sound
const audioElement = document.querySelector('audio');
const source = audioCtx.createMediaElementSource(audioElement);

const getSong = async function(id) {
	return await fetch("https://api.deezer.com/track/77796220?output=jsonp&output=jsonp&version=js-v1.0.0", {
		"credentials": "include",
		"headers": {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0",
			"Accept": "*/*",
			"Accept-Language": "en,de;q=0.7,en-US;q=0.3",
			"Pragma": "no-cache",
			"Cache-Control": "no-cache",
			"Access-Control-Allow-Origin": "*"
		},
		"referrer": "https://developers.deezer.com/api/explorer?url=track/3135556",
		"method": "GET",
		"mode": "cors"
	});
};

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
// Default value
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
console.log('BufferLength: ' + bufferLength);
var integerArray = new Uint8Array(bufferLength);
var floatArray = new Float32Array(bufferLength);

const getDataButton = document.querySelector('#getDataButton');
const getWaveData = function() {
    console.log(analyser);
    console.log(analyser.getByteTimeDomainData(integerArray));
    console.log(integerArray);
};

const getFrecuencyData = function() {
    console.log(analyser);
    console.log(analyser.getFloatFrequencyData(floatArray));
    console.log(floatArray);
};

window.addEventListener('keydown', function (evt) {
    if (evt.key == " "){
        console.log('call play')
        play();
    }
    if (evt.key == "o"){
        getWaveData();
    }
	if (evt.key == "p"){
        getFrecuencyData();
    }
});

source.connect(analyser).connect(audioCtx.destination);

console.log(getSong(''))
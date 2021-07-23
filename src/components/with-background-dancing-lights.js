AFRAME.registerComponent("with-background-dancing-lights", {
    schema: {
        intensityMin: {type: 'number', default: 0.1}
    },

    init: function () {
        this.originalIntensity = this.el.getAttribute('light').intensity
        console.log(this.originalIntensity);
    },

    tick: function (time, timeDelta) {
        // analyser.getByteTimeDomainData(integerArray);
w        //console.log(this.originalIntensity);
        //analyser.getByteFrequencyData(integerArray);
        this.el.setAttribute('light', {
            intensity: Math.max(integerArray[0]/100, this.data.intensityMin)
        })
    }
})
AFRAME.registerComponent("with-music", {
    init: function () {
        this.originalPosition = new THREE.Vector3()
        this.originalPosition.copy(this.el.object3D.position)
    },

    tick: function (time, timeDelta) {
        // analyser.getFloatFrequencyData(floatArray);
        analyser.getByteTimeDomainData(integerArray);
        if (integerArray[0] > 160 ) {
            this.el.setAttribute('position', {
                x: this.originalPosition.x + -2,
                y: this.originalPosition.y,
                z: this.originalPosition.z
            })    
        } else {
            this.el.setAttribute('position', {
                x: this.originalPosition.x,
                y: this.originalPosition.y,
                z: this.originalPosition.z
            })
        }
    }
})
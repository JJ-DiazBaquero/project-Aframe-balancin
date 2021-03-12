AFRAME.registerComponent("with-music", {
    init: function () {
        this.originalPosition = new THREE.Vector3()
        this.originalPosition.copy(this.el.object3D.position)
    },

    tick: function (time, timeDelta) {
        // analyser.getByteTimeDomainData(integerArray);
        analyser.getFloatFrequencyData(floatArray);
        this.el.setAttribute('position', {
            x: this.originalPosition.x + floatArray[699]/10,
            y: this.originalPosition.y,
            z: this.originalPosition.z
        }) 
    }
})
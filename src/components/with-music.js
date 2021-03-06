AFRAME.registerComponent("with-music", {
    init: function () {
        this.originalPosition = new THREE.Vector3()
        this.originalPosition.copy(this.el.object3D.position)
    },

    tick: function (time, timeDelta) {
        analyser.getByteTimeDomainData(dataArray);
        this.el.setAttribute('position', {
            x: this.originalPosition.x + dataArray[0]/100,
            y: this.originalPosition.y,
            z: this.originalPosition.z
        })
    }
})
AFRAME.registerComponent("particle-with-music", {
    init: function () {
        this.originalPosition = new THREE.Vector3()
        this.originalPosition.copy(this.el.object3D.position)
    },

    schema: {
        index: {type: 'number', default: 1}
    },

    tick: function (time, timeDelta) {
        if(isPlaying){
            this.el.setAttribute('position', {
                x: this.originalPosition.x,
                y: integerArray[this.data.index]/128.0 + 1,
                z: this.originalPosition.z
            })
        }
    }
})
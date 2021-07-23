AFRAME.registerComponent("with-plane-dancing-lights", {
    schema: {
        intensityMin: {type: 'number', default: 0.1}
    },

    init: function () {
        this.originalIntensity = this.el.getAttribute('light').intensity
        this.originalColor = this.el.getAttribute('material').color
    },

    tick: function (time, timeDelta) {
        if (integerArray[0] < 160 ) {
            this.el.setAttribute('light', {
                intensity: 0
            })
            this.el.setAttribute('material', {
                color: '#000000'
            })
        } else {
            this.el.setAttribute('light', {
                intensity: this.originalIntensity
            })
            this.el.setAttribute('material', {
                color: this.originalColor
            })
        }
    }
}) 
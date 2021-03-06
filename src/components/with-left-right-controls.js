AFRAME.registerComponent("with-left-right-controls", {
    init: function () {
        var element = this.el;
        
        this.onKeydown = function (evt) {
            // look for q
            var isLeftPressed = evt.keyCode === 81;
            if (isLeftPressed) {
                element.emit('rotate', {rotateRight: false});
            }
            // look for e
            var isRightPressed = evt.keyCode === 69;
            if (isRightPressed) {
                element.emit('rotate', {rotateRight: true});
            }
        }

        window.addEventListener('keydown', this.onKeydown);

    },
})
AFRAME.registerComponent("grid-helper", {
    init: function () {
        const size = 40;
        const divisions = 40;

        const gridHelper = new THREE.GridHelper( size, divisions );
        this.el.sceneEl.object3D.add( gridHelper );
    }
})
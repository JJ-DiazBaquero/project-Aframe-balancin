AFRAME.registerComponent("freq-visualizer", {
	init: function () {
		this.DIVISIONS_NUMBER = 40;
		this.WIDTH = 1;
		this.BASE_HEIGHT = 1;
		this.DEPTH = 1;


		const scene = this.el.sceneEl.object3D
		this.divisions = new Array(this.DIVISIONS_NUMBER);
		
		for (let i = 0; i < this.divisions.length; i++) {
			const geometry = new THREE.BoxGeometry( this.WIDTH, this.BASE_HEIGHT, this.DEPTH);
			const material = new THREE.MeshBasicMaterial( {color: 0x191970} );
			const cube = new THREE.Mesh( geometry, material );
			this.divisions[i] = cube;
			
			const position = new THREE.Vector3(i*(this.WIDTH + 0.1) - this.DIVISIONS_NUMBER/2, 0.5, -30);
			cube.position.copy(position);
			// element.setAttribute("particle-with-music", `index: ${Math.floor(i/DIVISIONS_NUMBER*integerArray.length)}`);
		
			scene.add(cube);
		}
    },
	tick: function() {
		if(isPlaying){
			for (let i = 0; i < this.divisions.length; i++) {
				this.divisions[i].scale.y = floatArray[Math.floor(i/this.divisions.length*floatArray.length)] + 1
			}
        }
	}
});
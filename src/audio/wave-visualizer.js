PARTICLES_NUMBER = 200

var sceneEl = document.getElementsByTagName("a-scene")[0];
var particles = new Array(PARTICLES_NUMBER);
console.log('Particle');
for (let i = 0; i < particles.length; i++) {
	const element = document.createElement("a-sphere");
	particles[i] = element;
	
	const position = `${i/PARTICLES_NUMBER*7 - 2} 4 -5`;
	element.setAttribute("radius", 0.02);
	element.setAttribute("position", position);
	element.setAttribute("color", "#D10000");
	element.setAttribute("particle-with-music", `index: ${Math.floor(i/PARTICLES_NUMBER*integerArray.length)}`);

	sceneEl.appendChild(element)
}
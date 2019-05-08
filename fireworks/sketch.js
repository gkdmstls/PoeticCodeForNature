let particles = [];
const gravity = .25;
const colors = ['red', 'white', 'green', 'yellow'];
let endColor;


function setup() {
  createCanvas(640, 360);
  endColor = color(64, 0);
}

function mousePressed() {
	particles.push(new Firework(mouseX, height));
}

function draw() {
  background(0);
  particles.forEach((p) => {
		p.step();
		p.draw();
	});
	particles = particles.filter((p) => p.isAlive);

}

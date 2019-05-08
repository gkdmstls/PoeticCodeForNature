let particleSystem;

function setup() {
  createCanvas(630, 400);
  particleSystem = new ParticleSystem(createVector(width / 2, -50));
}

function draw() {
  background(200);
  particleSystem.addParticle();
  particleSystem.run();
}

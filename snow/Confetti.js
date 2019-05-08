class Confetti extends Particle {

  // Override the display method
  display() {
    rectMode(CENTER);
    fill(255, this.lifespan);
    stroke(255, this.lifespan);
    strokeWeight(9);
    push();
    translate(this.position.x, this.position.y);
    var theta = map(this.position.x, 0, width, 0, TWO_PI * 2);
    rotate(theta);
    rect(0, 0, 0, 0);
    pop();
  }
}

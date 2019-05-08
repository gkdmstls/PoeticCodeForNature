class Firework extends Particle {
	constructor(x, y) {
		super(x, y, random(-5, 10), random(-20, -15),
			random(colors), 25);
		this.countdown = random(40, 60);
	}

	step() {
		super.step();

		this.countdown--;
		if (this.countdown <= 0) {
			const explosionSize = random(30, 60);
			for (let i = 0; i < explosionSize; i++) {

				const speed = random(10, 50);
				const angle = random(TWO_PI);
				const xSpeed = cos(angle) * speed;
				const ySpeed = sin(angle) * speed;

				particles.push(new Particle(this.x, this.y,
					xSpeed, ySpeed,
					this.color, 5
				));
			}
			this.isAlive = false;
		}
	}
}

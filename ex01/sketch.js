var img;
let particles = [];

function preload()
{
  img = loadImage('www.jpg');
}

function setup()
{
  createCanvas(600, 400);
  frameRate(20);
}

function draw()
{
    background(255);
    image(img, 0, 0);

  let p = new Particle();
  particles.push(p);
  for(let i = 0; i < particles.length; i++)
  {
    particles[i].update();
    particles[i].show();
  }
  ellipse(mouseX, mouseY, 10, 10);
}

class Particle
{
  constructor()
  {
    this.x = mouseX;
    this.y = mouseY;
    this.vx = random (1, -1);
    this.vy = random (3, -1);
  }
  show()
  {
    noStroke();
    fill(255, 205, 100, 130);
    ellipse(this.x, this.y, 10);

  }
  update()
  {
    this.x += this.vx;
    this.y += this.vy;
  }
}

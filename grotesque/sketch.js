var img;
let particles = [];

function preload()
{
  img = loadImage('ccd.png');
}

function setup()
{
  createCanvas(400, 400);
  frameRate(20);
  let p = new Particle();
  particles.push(p);
}

function draw()
{
  background(0);
  image(img,0,0);

  let p = new Particle();
  particles.push(p);
  for(let i = 0; i < particles.length; i++)
{
  particles[i].update();
  particles[i].show();


}
}

class Particle
{
  constructor()
{
  this.x = 130;
  this.y = 130;
  this.vx = random (3, -1);
  this.vy = random (1, -1);
  this.x2 = 165;
  this.y2 = 220;
  this.vx2 = random (1, -1);
  this.vy2 = random (4, -1);
  this.x3 = 270;
  this.y3 = 130;
  this.vx3 = random (5, -1);
  this.vy3 = random (1, -1);
   this.alpha = 230;
}
  show()
{
  fill(255,0,0, this.alpha);
  rect( this.x2,this.y2, 80, 15);
  fill(random(255), this.alpha);
  ellipse(this.x, this.y, 45);
  ellipse(this.x3, this.y3, 45);

}


update()
{
  this.x += this.vx;
  this.y += this.vy;
  this.x2 += this.vx2;
  this.y2 += this.vy2;
  this.x3 += this.vx3;
  this.y3 += this.vy3;
  this.alpha-=10;

}

}

import * as p5 from 'p5'
let dots = new Array(400);

const stageWidth = 500;
const stageHeight = 500;

const sketch = (p:p5)=>{
p.setup = () => {
  p.createCanvas(stageWidth, stageHeight);

  for (let i = 0; i < dots.length; i++) {
    //console.log(i)
    dots[i] = new Dot(stageWidth / 2, stageHeight / 2);
  }
}

p.draw = () => {
  p.background(0, 30);
  for (let i = 0; i < dots.length; i++) {
    dots[i].update();
    dots[i].draw();
  }
}

class Dot {
  location;
  velocity;

  constructor(w, h) {
    this.setup(w, h);
  }

  setup(w, h) {
    this.location = p.createVector(w, h);
    this.velocity = p.createVector(p.random(3), p.random(3));
    this.location.add(this.velocity);
  }

  update() {
    this.velocity.rotate(0.5 - p.random(1));
    this.location.add(this.velocity);
    if (this.location.x > stageWidth) {
      this.velocity.x = -1 * this.velocity.x;
    }
    if (0 > this.location.x) {
      this.velocity.x = -1 * this.velocity.x;
    }
    if (this.location.y > stageHeight) {
      this.velocity.y = -1 * this.velocity.y;
    }
    if (0 > this.location.y) {
      this.velocity.y = -1 * this.velocity.y;
    }
  }

  draw() {
    p.ellipse(this.location.x, this.location.y, 3, 3);
  }
}
}

const s = new p5(sketch)

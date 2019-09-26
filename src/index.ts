let dots = new Array(400);

const stageWidth = 500;
const stageHeight = 500;

function setup() {
  createCanvas(stageWidth, stageHeight);

  for (let i = 0; i < dots.length; i++) {
    //console.log(i)
    dots[i] = new Dot(stageWidth / 2, stageHeight / 2);
  }
}

function draw() {
  background(0, 30);
  for (let i = 0; i < dots.length; i++) {
    dots[i].update();
    dots[i].draw();
  }
}

class Dot {
  constructor(w, h) {
    this.setup(w, h);
  }

  setup(w, h) {
    this.location = createVector(w, h);
    this.velocity = createVector(random(3), random(3));
    this.location.add(this.velocity);
  }

  update() {
    this.velocity.rotate(0.5 - random(1));
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
    ellipse(this.location.x, this.location.y, 3, 3);
  }
}

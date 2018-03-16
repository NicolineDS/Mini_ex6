var x=0;
var y=0;
var fr = 60;
var xspeed = 10;
var yspeed = 10;
var nums = [20, 30, 30, 60];
let ball1 = [];
let i = 0;


function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
for (let i = 0; i < 10; i++){ //Making my for loop to make multiple balls
ball1 [i] = new Ball(x, 200, 20);
}
}

function draw() {
for (let i = 0; i < ball1.length; i ++){
  ball1[i].show();
  ball1[i].move();

}

}

class Ball{ //the class for the balls
  constructor(){
    this.x = random (0, width);
    this.y = random (0, height);
    this.xspeed = 10;
    this.yspeed = 10;
  }

    show(){
      ellipse(this.x, this.y, 50,50);
      stroke(random(255), random(255), random(255));
      strokeWeight(4);
      noFill();
    }

    move(){ //If the ball touches the sides of the canvas the ball bounces back.
      if(this.x > width || this.x < 0) {
        this.xspeed = this.xspeed * -1;

      }
      if(this.y > height || this.y < 0){
        this.yspeed = this.yspeed * -1;
      }


      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;

    }
  }

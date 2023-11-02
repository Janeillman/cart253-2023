"use strict";

let gravityForce = 0.0025;

let paddle;
let platform;

let balls = [];
let numBalls = 10;

function setup() {
  createCanvas(windowWidth,windowHeight);

  paddle = new Paddle(300, 40);
  platform = new Platform(200, 30);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }
}

function draw() {
  background(0);

  paddle.move();
  paddle.display();

  platform.move();
  platform.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(platform);
      ball.display();
    }
  }
}
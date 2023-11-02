"use strict";

let gravityForce = 0.0025;
let paddle;
let platform;
let balls = [];
let numBalls = 10;

let titleString = "Start Game";
let endingString = "Game Over";
let endingTwoString = "Saved!";
let state = `title`; // possible states are `title`, `animation`, `ending`, `endingTwo`

function setup() {
  createCanvas(windowWidth,windowHeight);

  paddle = new Paddle(300, 40);
  platform = new Platform(200, 30);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = 10;
    let ball = new Ball(x,y);
    balls.push(ball);
  }
}

function draw() {
  background(0);

if (state === `title`) {
    textSize(30);
    textAlign(CENTER, CENTER);
    fill(255);
    text(titleString, width / 2, height / 2);
  }
  else if (state === `animation`) {
    paddle.move();
    paddle.display();

    platform.move();
    platform.display();

    ballsGone();
    ballSaved();


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
    else if (state === `endingTwo`) {
    fill(100, 220, 200);
    rectMode(CENTER);
    rect(width/2, height/2, 200, 50);
    fill(0, 255, 0);
    text(endingTwoString, width / 2, height / 2)
   }
      else if (state === `ending`) {
        fill(250, 200, 200);
        rectMode(CENTER);
        rect(width/2, height/2, 200, 50);
        fill(255, 0, 0);
        text(endingString, width / 2, height / 2)
      }
}

function mousePressed() {
  if (state === `title`) {
      state = `animation`;
    }
}

function ballsGone() {
  let allBallsOffScreen = true;
  for (let i = 0; i < balls.length; i++) {
    if(balls[i].active) {
      allBallsOffScreen = false;
    }
  }
  if (allBallsOffScreen) {
      state = `ending`;
  }
}

function ballSaved() {
  for (let i = 0; i < balls.length; i++) {
  if (balls[i].fill.g === balls[i].saved) {
    state = `endingTwo`;
    }
  }
}

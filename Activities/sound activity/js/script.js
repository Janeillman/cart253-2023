
"use strict";

function preload() {
}

// The Balls
let balls = [];

// Just creates canvas
function setup() {
    createCanvas(600,600);

    userStartAudio();
}


function draw() {
    background(0);

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.move();
        ball.bounce();
        ball.display();
    }
}

function mousePressed() {
    createBall(mouseX, mouseY);
}

function createBall(x, y) {
        let ball = new Ball(x, y);
        balls.push(ball);
}


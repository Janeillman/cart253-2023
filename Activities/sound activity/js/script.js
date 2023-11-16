
"use strict";


function preload() {

}

// The Balls
let balls = [];

// Just creates canvas
function setup() {
    createCanvas(600,600);
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
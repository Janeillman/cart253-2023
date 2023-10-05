/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";



function preload() {

}


// yellow circle
let circle1 = {
    x: 150,
    y: 500, 
    position: 0,
    size:100,
    vx: 6,
    vy: 6,
    speed: 1,
    fill: {
        r: 0,
        g: 0,
        b: 255
    }
};

// blue circle
let circle2 = {
    x: 800,
    y: 150,
    size: 100,
    vx: 1,
    vy: 1, 
    speed: 2,
    fill: {
        r: 247,
        g: 239,
        b: 5,
    }
}; 

let state = `title`; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    setupCircles();
}

function setupCircles() {

    circle1.x = circle1.x;
    circle2.x = circle2.x;

}

function draw() {
    background(0);


    let dx = circle2.x - circle1.x; // Distance between the circle and the mouse horizontally
    let dy = circle2.y - circle1.y; // Distance between the circle and the mouse vertically
  
    if (dx < 0) { // If dx is negative, the mouse is to the right
      // So move right
      circle2.vx = circle2.speed;
    }
    else if (dx > 0) { // If dx is positive, the mouse is to the left
      // So move left
      circle2.vx = -circle2.speed;
    }
  
    // Same again for the y axis
    if (dy < 0) {
      circle2.vy = circle2.speed;
    }
    else if (dy > 0) {
      circle2.vy = -circle2.speed;
    }
  
  
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
  
    // ellipse(circle2.x, circle2.y, circle2.size);

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `love`) {
        love();
    }  
    else if (state === `sadness`) {
        sadness();
    } 

}

function title() {
    push();
    textSize(64);
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text(`Love?`, width/2, height/2);
    pop();

}

function simulation() {
    move();
    checkOffScreen();
    checkOverlap();
    display();
} 

function love() {
    push();
    textSize(64);
    fill(255, 100, 100);
    textAlign(CENTER, CENTER);
    text(`LOVE!`, width/2, height/2);
    pop();
}

function sadness() {
    push();
    textSize(64);
    fill(100, 100, 255);
    textAlign(CENTER, CENTER);
    text(`Love Lost ):`, width/2, height/2);
    pop();
}

function move() {

    // move yellow circle
    if(keyIsDown(LEFT_ARROW)){
        circle1.x = circle1.x - circle1.vx;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        circle1.x = circle1.x + circle1.vx;
    }
    else if (keyIsDown(UP_ARROW)) {
        circle1.y = circle1.y - circle1.vy;
    }
    else if (keyIsDown(DOWN_ARROW)) {
        circle1.y = circle1.y + circle1.vy;
    }
}

function checkOffScreen() {
    // check if circles go off screen
    if (circle1.x < 0|| circle1.x > width ||circle1.y < 0 || circle1.y > height) {
        state = `sadness`
    }
}

function checkOverlap() {
    // check if circles touch
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size/2 + circle2.size/2) {
       state = `love`;
    }
}

function display() {
    // display circle1
   
    ellipse(circle1.x, circle1.y, circle1.size);
    fill(circle1.fill.r, circle1.fill.g, circle1.fill.b);
   

    // display circle2
    ellipse(circle2.x, circle2.y, circle2.size);
    fill(circle2.fill.r, circle2.fill.g, circle2.fill.b);
}

function mousePressed() {
    if (state === `title`) {
        state = `simulation`;
    }
}


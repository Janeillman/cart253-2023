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



let circle1 = {
    x: 150,
    y: 250, 
    position: 0,
    size:100,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: {
        r: 0,
        g: 0,
        b: 255
    }
};

let circle2 = {
    x: 350,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0, 
    speed: 3,
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

    circle1.vx = random(-circle1.speed, circle1.speed);
    circle1.vy = random(-circle1.speed, circle1.speed);
    circle2.vx = random(-circle2.speed, circle2.speed);
    circle2.vy = random(-circle2.speed, circle2.speed);
}

function draw() {
    background(0);

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
    text(`LOVE?`, width/2, height/2);
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
    text(`:(`, width/2, height/2);
    pop();
}

function move() {
    // move yellow circle
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;

    // move blue circle
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
// use `map` to make blue circle follow yellow circle
}

function checkOffScreen() {
    // check if circles go off screen
    if (circle1.x < 0|| circle1.x > width ||circle1.y < 0 || circle1.y > height || circle2.x < 0 ||circle2.x > width|| circle2.y < 0 || circle2.y > height) {
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

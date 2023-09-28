/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/

let cat = {
    image: 0,
    x: 100,
    y: 300,
    size: 200,
    speed: 5,
    accelerate: 0.05,
};

let mice = {
    image: 0,
    x: 0,
    y: 0,
    size: 100,
    speed: 0,
};

let circle = {
    x: 0,
    y: 0,
    size: 200,
    alpha: 18,
    fill: {
        r: 150,
        g:190,
        b:100,
    }
};


function preload() {

    cat.image = loadImage("assets/images/catFace.jpeg");
    mice.image = loadImage("assets/images/mouseFace.jpeg");
    
}

/**
 * Description of setup
*/
function setup() {

    createCanvas(windowWidth, windowHeight);

}

/**
 * Description of draw()
*/
function draw() {

    background(0, 200, 220, 20);

 // background display
 for(let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    noStroke();
    ellipse(x,y, 100);
    fill(circle.fill.r, circle.fill.g, circle.fill.b, circle.alpha);
 }
// Display cat
    imageMode(CENTER);
    image(cat.image, cat.x, cat.y, cat.size, cat.size);

// Display mice
    imageMode(CENTER);
    mice.x = mouseX;
    mice.y = mouseY;
    image(mice.image, mouseX, mouseY, mice.size, mice.size);

// Cat movement
    cat.x = cat.x + cat.speed;

    if(cat.x >= width) {
        cat.x = 0;
        cat.y = random(0, height);
    }

    if(cat.x >= 0) {
        cat.speed = cat.speed + cat.accelerate;
    }

// Cat catches mouse
let d = dist(mice.x, mice.y, cat.x, cat.y);
if(d < cat.size/2 + mice.size/2) {
    noLoop();
    background(255, 0, 0);
}



}


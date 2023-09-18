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
function preload() {

}



let bg = {
    r: 0,
    g: 255,
    b: 0,
};
let circle = {
    x: 0,
    y: 100,
    size: 200,
    fill: 255,
    alpha: 200,
};
let square = {
    x: 300,
    y: 0,
    wide: 100,
    tall: 100,
    fill: 0,
    alpha: 100,
};




/**
 * Description of setup
*/
function setup() {

    createCanvas(500, 500);

}


/**
 * Description of draw()
*/
function draw() {

    background(bg.r, bg.g, bg.b);

    // CIRCLE
    ellipseMode(CENTER);
    circle.x = circle.x + 1;
    circle.x = constrain(circle.x, 0, 400);
    fill(circle.fill, circle.alpha);
    ellipse(circle.x, circle.y, circle.size);

    // RECT
    rectMode(CENTER);
    square.y = square.y + 1;
    square.y = constrain(square.y, 0, 450);
    fill(square.fill, square.alpha);
    rect(square.x, square.y, square.wide, square.tall);

    

    
}
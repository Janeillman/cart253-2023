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
    r: 230,
    g: 150,
    b: 200,
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
let oval = {
    x: 100,
    y: 450,
    wide: 200,
    tall: 100,
    fill: 180,
    alpha: 100,
}




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
    circle.x = circle.x + 3;
    circle.x = constrain(circle.x, 0, 400);
    fill(circle.fill, circle.alpha);
    ellipse(circle.x, circle.y, circle.size);

    // SQUARE
    rectMode(CENTER);
    square.y = square.y + 2;
    square.y = constrain(square.y, 0, 450);
    fill(square.fill, square.alpha);
    rect(square.x, square.y, square.wide, square.tall);

    // OVAL
    ellipseMode(CENTER);
    oval.y = oval.y + -1;
    oval.y = constrain(oval.y, 50, 450);
    fill(oval.fill, oval.alpha);
    ellipse(oval.x, oval.y, oval.wide, oval.tall);


    

    
}
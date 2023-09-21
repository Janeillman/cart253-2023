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
    size: 50,
    fill: 255,
    alpha: 200,
    r:190,
    g:230,
    b:100,
};
let square = {
    x: 250,
    y: 0,
    wide: 100,
    tall: 100,
    fill: 200,
    alpha: 100,
    r: 70,
    g:200,
    b:50,
};
let oval = {
    x: 100,
    y: 450,
    wide: 200,
    tall: 100,
    fill: 180,
    alpha: 100,
    r:100,
    g:100,
    b:0,
};
let pyramid = {
    r:255,
    g:100,
    b:100,
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

    background(bg.r, bg.g, mouseX);

    // CIRCLE
    ellipseMode(CENTER);
    circle.x = circle.x + 4;
    circle.size = circle.size + 0.5;
    circle.size = constrain(circle.size, 50, 200);
    circle.fill = map(circle.x, 0, 400, 100, 255);
    circle.x = constrain(circle.x, 0, 400);
    fill(circle.r, circle.g, circle.b);
    ellipse(circle.x, circle.y, circle.size);

    // SQUARE
    rectMode(CENTER);
    square.y = square.y + 2;
    square.y = constrain(square.y, 0, 400);
    square.wide = square.wide +1;
    square.wide = constrain(square.wide, 100, 400);
    square.g = map(square.y, 0, 450, 0, 200);
    fill(square.r, square.g, square.b);
    mouseY = constrain(mouseY, 50, 400);
    rect(square.x, square.y, mouseY, square.tall);
    

    // OVAL
    ellipseMode(CENTER);
    oval.y = oval.y + -1;
    oval.y = constrain(oval.y, 100, 450);
    oval.tall = map(mouseX, 0, 500, 30, 200);
    oval.tall = constrain(oval.tall, 30, 200);
    oval.b = map(mouseX, 0, 500, 0, 255);
    fill(oval.r, oval.g, oval.b);
    ellipse(oval.x, oval.y, oval.wide, oval.tall);

    // TRIANGLE
    pyramid.r = pyramid.r + -1;
    fill(pyramid.r, pyramid.g, pyramid.b);
    triangle(200, 300, 250, 200, 300, 300);
  




    
}
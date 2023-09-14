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


/**
 * Description of setup
*/
function setup() {

    createCanvas(800, 800);
    background(51, 20);
// HEAD
    ellipseMode(CENTER);
    fill(0, 230, 50);
    ellipse(400, 400, 400, 400);
// MOUTH
    rectMode(CENTER);
    fill(134, 200, 190);
    rect(400, 450, 300, 50);
// EYES
    ellipseMode(CORNER);
    fill(159, 230, 50);
    ellipse(300, 300, 70, 70);
    ellipse(500, 300, 70, 70);
}


/**
 * Description of draw()
*/
function draw() {

}
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
    createCanvas(600, 600); 
    background(50,50,100);
    noStroke();
    
// NECK
    rectMode(CENTER);
    fill(100, 100, 255);
    rect(300, 400, 70, 300);

// BODY
    ellipseMode(CENTER);
    fill(100,100,255);
    ellipse(300, 600, 300, 400);

// HEAD
    ellipseMode(CENTER);
    fill(100, 255, 200);
    ellipse(300, 200, 500, 200);

// EYES
    strokeWeight(10);
    stroke(255);
    ellipseMode(CENTER);
    fill(0, 0, 0);
    ellipse(150, 200, 80, 80);
    ellipse(300, 200, 80, 80);
    ellipse(450, 200, 80, 80);

// MOUTH
    strokeWeight(3);
    stroke(0);
    line(250, 275, 350, 275);
       

}


/**
 * Description of draw()
*/
function draw() {

}
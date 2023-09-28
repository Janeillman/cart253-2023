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

    mouseFace = loadImage("assets/images/catFace.jpeg");
    catFace = loadImage("assets/images/mouseFace.jpeg");

}

let catFace = {
    x: 100,
    y: 0,
    size: 100,
    speed: 1,
};

let mouseFace = {
    x: 400,
    y: 0,
    size: 75,
    speed: 1,
};


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

background(0);

imageMode(CENTER);
image(mouseFace, 200, 200);
image(catFace, mouseX, mouseY, 100, 100);


}


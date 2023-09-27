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


let clownImage;

function preload() {

clownImage = loadImage("assets/images/clown.png");

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
    background(0);

    imageMode(CENTER);
    image(clownImage, mouseX, mouseY);




    }

   


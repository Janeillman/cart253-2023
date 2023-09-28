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
    size: 75,
    speed: 0,
};

let mice = {
    image: 0,
    x: 0,
    y: 0,
    size: 100,
    speed: 0,
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

background(0);

imageMode(CENTER);
image(mice.image, mouseX, mouseY, mice.size, mice.size);
image(cat.image, cat.x, cat.y, cat.size, cat.size);


}


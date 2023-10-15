/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/

let astronaut;

function preload() {
    astronaut = loadImage("assets/images/astronaut.webp");
}

/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);

}

/**
Description of draw()
*/
function draw() {

background(0);


for (let i = 0; i < 100; i++) {

  let x = random(0, width);
  let y = random(0, height);

  point(x, y);
}

image(astronaut, width/2, height/2);

}
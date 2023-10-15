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

let astronautImage;

function preload() {
    astronautImage = loadImage("assets/images/astronaut.webp");
}


let astronaut = {
    x: 250,
    y: 250,
    vx: 0,
    vy: 0,
    speed: 5,
    size: 100
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
    useArrowKeys();
    displayStars();
    displayAstronaut();

function displayStars() {
    for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    point(x, y);
    }
}

function useArrowKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    astronaut.vx = -astronaut.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    astronaut.vx = astronaut.speed;
  }
  else {
    astronaut.vx = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    astronaut.vy = -astronaut.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    astronaut.vy = astronaut.speed;
  }
  else {
    astronaut.vy = 0;
  }

  astronaut.x = astronaut.x + astronaut.vx;
  astronaut.y = astronaut.y + astronaut.vy;
}

function displayAstronaut() {
    image(astronautImage, astronaut.x, astronaut.y, astronaut.size, astronaut.size);
}




}
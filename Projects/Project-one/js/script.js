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

let asteroid = {
    x: 250,
    y: 250,
    vx: 0,
    vy: 0,
    speed: 5,
    size: 100,
    fill: {
        r: 118,
        g: 130,
        b: 133
    }
}

/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);

    asteroid.y = random(0, height);
    asteroid.vx = asteroid.speed;
}

/**
Description of draw()
*/
function draw() {

    background(0);
    useArrowKeys();
    displayStars();
    displayAstronaut();
    displayAsteroids();

function displayStars() {
    for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    ellipse(x, y, 1.5, 1.5);
    }
}

function displayAsteroids() {

    for (let i = 0; i< 5; i++ )
    ellipse(asteroid.x, asteroid.y, asteroid.size);
    fill(asteroid.fill.r, asteroid.fill.g, asteroid.fill.b);

    asteroid.x = asteroid.x + asteroid.vx;
    asteroid.y = asteroid.y + asteroid.vy;
    
    if (asteroid.x > width) {
        asteroid.x = 0;
        asteroid.y = random(0, height);
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
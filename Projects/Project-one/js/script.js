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
    x: 650,
    y: 650,
    vx: 0,
    vy: 0,
    speed: 7,
    size: 100,
    fill: {
        r: 118,
        g: 130,
        b: 133,
    },
    spacing: 400
}
let planetWater = {
    x: 1100,
    y: 150,
    size: 200,
    fill: {
      r: 3,
      g: 150,
      b: 250
    }
}
let planetFood = {
    x: 150,
    y: 500,
    size: 250,
    fill: {
      r: 18,
      g: 160,
      b: 8
    }

}

let titleString = "Space";
let endingString = "Game Over";
let state = `title`; 
// possible states are `title`, `animation`, `ending`


/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

  // Text settings
  textSize(32);
  textAlign(CENTER, CENTER);
}

/**
Description of draw()
*/
function draw() {

    background(0);
    displayPlanets();
    displayStars();
    displayBars();
    displayAstronaut();
    // checkSafety();
   

  if (state === `title`) {
      fill(255);
      text(titleString, width / 2, height / 2);
    }
  else if (state === `animation`) { 
    useArrowKeys();
    displayAsteroids();
    checkOverlap();
    }
    else if (state === `ending`) {
      fill(255, 0, 0);
      text(endingString, width / 2, height / 2)
    }
}

function checkOverlap() {
    let d = dist(astronaut.x, astronaut.y, asteroid.x, asteroid.y);
      if(d < asteroid.size/2 + astronaut.size/2) {
      state = `ending`;
  }
}

// function checkWaterSafety() {
//   let d = dist(astronaut.x, astronaut.y, planetWater.x, planetWater.y);
//   if(d < planetWater.size/2 + astronaut.size/2) {
//   // do not check do: function checkOverlap
//   ;
// }
// }

function keyPressed() {
  if (state === `title`) {
      state = `animation`;
    }
  }

function displayStars() {
  stroke(255);
    for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    ellipse(x, y, 1.5, 1.5);
    }
}

function displayAsteroids() {

asteroid.vx = asteroid.speed;

  let x = asteroid.x;
  let y = asteroid.y;
    for (let i = 0; i< 5; i++ ) {
    ellipse(x, y, asteroid.size);
    x = x + asteroid.spacing;
    y = y + asteroid.spacing;
    fill(asteroid.fill.r, asteroid.fill.g, asteroid.fill.b);
    }
    asteroid.x = asteroid.x + asteroid.vx;
    asteroid.y = asteroid.y + asteroid.vy;
    
    if (asteroid.x > width) {
        asteroid.x = 0;
        asteroid.y = random(0, height);
    }

}

function displayPlanets() {
// planet Water
  fill(planetWater.fill.r, planetWater.fill.g, planetWater.fill.b);
  ellipse(planetWater.x, planetWater.y, planetWater.size);
 

// planet Food
  fill(planetFood.fill.r, planetFood.fill.g, planetFood.fill.b);
  ellipse(planetFood.x, planetFood.y, planetFood.size);
}

function displayBars(){
  fill(20, 40, 200);
  rect(20, 50, 200, 20);
  fill(50, 100, 250);
  rect(20, 100, 200, 20);
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





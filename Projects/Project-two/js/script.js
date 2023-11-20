/**
Space Game
By: Jane Illman

This is a game where the player controls an astronaut with the keyboard's arrow keys. 
To start the game, click on the "Start Game" button on the title page.
The astronaut must touch both the blue and green planets before the water and food supply bars run out.
if the astronaut gets hit by an asteroid, or one of the supply bars runs out, the game ends.
Refresh to play again.
*/

"use strict";


/**
Loading image of astronaut
*/

let astronautImage;

function preload() {
    astronautImage = loadImage("assets/images/astronaut.webp");
}
// Variables: Astronaut, Asteroid, Water planet, Food planet, Water supply bar, Food suply bar.
let astronaut = {
    x: 600,
    y: 50,
    vx: 0,
    vy: 0,
    speed: 7,
    size: 100
}
let asteroid = {
    x: 650,
    y: 650,
    vx: 0,
    vy: 0,
    speed: 12,
    size: 100,
    fill: {
        r: 211,
        g: 212,
        b: 219,
    },
    spacing: {
      x: 500,
      y: 500
    }
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
let waterBar = {
  x: 20,
  y: 50,
  h: 20,
  l: 200,
  speed: 0.4
}
let foodBar = {
  x: 20,
  y:100,
  h: 20,
  l: 200,
  speed: 0.3
}

// Displaying words
let titleString = "Start Game";
let instructionString = 
`Collect food and water for the astronaut,
      while avoiding the asteroids! 
  You can move the astronaut with the arrow keys.`;
let foodString = "FOOD";
let waterString = "WATER";
let endingString = "Game Over :(";
let state = `title`; 
// possible states are `title`, `animation`, `ending`


/**
Setup: creating the canvas and the text settings
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
    textSize(30);
    textAlign(CENTER, CENTER);
}

/**
Draw: Displaying functions in the right states of the program.
*/
function draw() {

    background(0);
    displayPlanets();
    displayStars();
    otherPlanets();
    displayAstronaut();
    runOut();
    waterRefill();
    foodRefill();

  if (state === `title`) {
      fill(200, 50, 50);
      rectMode(CENTER);
      rect(width/2, height/2, 200, 50);
    fill(255);
    text(titleString, width / 2, height / 2);
    text(instructionString, width / 2, height/ 3);
    }
  else if (state === `animation`) { 
    displayBars();
    useArrowKeys();
    displayAsteroids();
    asteroidHit();
    }
    else if (state === `ending`) {
      fill(250, 200, 200);
      rectMode(CENTER);
      rect(width/2, height/2, 200, 50);
      fill(255, 0, 0);
      text(endingString, width / 2, height / 2)
    }
}
// if an astroid touches the astronaut
function asteroidHit() {
    let d = dist(astronaut.x, astronaut.y, asteroid.x, asteroid.y);
      if(d < asteroid.size/2 + astronaut.size/2) {
      state = `ending`;
      }
}
// if one of the supply bars runs out
function runOut() {
  if (waterBar.l < 1) {
    state = `ending`;
  }
  else if (foodBar.l < 1) {
    state = `ending`;
  }
}
// To start the game by clicking "Start Game"
function mousePressed() {
  if (state === `title`) {
      state = `animation`;
    }
  }
// Use loop to make starry backgroud
function displayStars() {
  stroke(255);
    for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    ellipse(x, y, 1.5, 1.5);
    }
}
// Displaying food and water planets
function displayPlanets() {
// planet Water
  fill(planetWater.fill.r, planetWater.fill.g, planetWater.fill.b);
  ellipse(planetWater.x, planetWater.y, planetWater.size);
  text(waterString, planetWater.x, planetWater.y);

// planet Food
  fill(planetFood.fill.r, planetFood.fill.g, planetFood.fill.b);
  ellipse(planetFood.x, planetFood.y, planetFood.size);
  text(foodString, planetFood.x, planetFood.y);
}
// Display supply bars; Make them decrease whenever astronaut is not touching the planet
function displayBars() {
  rectMode(CORNER);

  fill(255);
  rect(20, 50, 200, 20);
  rect(20, 100, 200, 20);
  
  fill(3, 150, 250);
  rect(waterBar.x, waterBar.y, waterBar.l, waterBar.h);
  waterBar.l = waterBar.l - waterBar.speed;
 
  fill(18, 160, 8);
  rect(foodBar.x, foodBar.y, foodBar.l, foodBar.h);
  foodBar.l = foodBar.l - foodBar.speed;
 
}
// Water bar returns to full when astronaut touches water planet
function waterRefill() {
  let d = dist(astronaut.x, astronaut.y, planetWater.x, planetWater.y);
  if(d < planetWater.size/2 + astronaut.size/2) {
      waterBar.l = 200;
  }
}
// Food bar returns to full when astronaut touches food planet
function foodRefill() {
let d = dist(astronaut.x, astronaut.y, planetFood.x, planetFood.y);
  if(d < planetFood.size/2 + astronaut.size/2) {
      foodBar.l = 200;
  }
}
// Using loop to display asteroids coming in from the left side at random y-values
function displayAsteroids() {

  asteroid.vx = asteroid.speed;
  
    let x = asteroid.x;
    let y = asteroid.y;
  for (let i = 0; i< 5; i++ ) {
      fill(asteroid.fill.r, asteroid.fill.g, asteroid.fill.b);
      ellipse(x, y, asteroid.size);
      x = x + asteroid.spacing.x;
      y = y + asteroid.spacing.y;
    }
      asteroid.x = asteroid.x + asteroid.vx;
      asteroid.y = asteroid.y + asteroid.vy;
      
    if (asteroid.x > width) {
          asteroid.x = 0;
          asteroid.y = random(0, height);
      }
  }
// Allow the user to control the astronaut (in 4 directions) with the arrow keys
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
// Display astronaut image
function displayAstronaut() {
    image(astronautImage, astronaut.x, astronaut.y, astronaut.size, astronaut.size);
}
// Display background planets for decoration
function otherPlanets() {
  fill(100, 108, 163);
  ellipse(700, 400, 120);
  ellipse(300, 50, 50);
  ellipse(900, 100, 75);
  ellipse(1000, 600, 170);
  ellipse(100, 300, 110);
  ellipse(500, 550, 60);
  ellipse(1150, 400, 30);
}





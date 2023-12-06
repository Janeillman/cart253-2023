/***********************
Space Game
by Jane Illman
Description: 
  This is a simple, fun, space themed game where the user interacts with the
  program by moving the astroanut arounf the screen with the arrow keys.
  The Goal of the game is to stay alive for as long as possible.
  The game ends if the astronaut gets hit by one of the asteroids, which come in
  randomly from the left of the screen. 
  The game will also end if the astronaut runs out of food or water. Their supply
  is shown in the top left of the screen and you can get refills by hovering over
  the proper planet.
  For ascetic effects, there are random planets and stars in the background, but they are just
  for looks and do not effect the astronaut.
  Have fun!
***********************/

"use strict";

let astronautImage;
let spaceMusic;

function preload() {
    astronautImage = loadImage("assets/images/astronaut2.webp");
    spaceMusic = loadSound(`assets/sounds/spacemusic.mp3`);
}

let astronaut = {
  x: 600,
  y: 50,
  vx: 0,
  vy: 0,
  speed: 7,
  size: 60
};

let stars = {
  starArray: [],
  numStars: 100,
};

let asteroids = {
  asteroidArray: [],
  numAsteroids: 3,
};

let planets = {
  planetArray: [],
  numPlanets: 11,
};

let planetWater = {
  x: 1100,
  y: 150,
  size: 225,
  fill: {
    r: 3,
    g: 150,
    b: 250,
  },
};

let planetFood = {
  x: 150,
  y: 500,
  size: 225,
  fill: {
    r: 75,
    g: 201,
    b: 106,
  },
};

let waterBar = {
  x: 20,
  y: 50,
  h: 20,
  l: 200,
  speed: 0.35,
};

let foodBar = {
  x: 20,
  y:100,
  h: 20,
  l: 200,
  speed: 0.15,
};

let titleString = "Start Game";
let instructionString = 
`Collect food and water for the astronaut,
      while avoiding the asteroids! 
  You can move the astronaut with the arrow keys.`;
let waterString = "WATER";
let foodString = "FOOD";
let endingString = "Game Over";
let state = `title`; 
// possible states are `title`, `animation`, `ending`

// set text settings, background, arrays
function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(30);
    textAlign(CENTER, CENTER);
    userStartAudio();

    for (let i = 0; i < asteroids.numAsteroids; i++) {
        let asteroid = new Asteroid();
        asteroids.asteroidArray.push(asteroid);
    }
    
    for (let i = 0; i < planets.numPlanets; i++) {
        let planet = new Planet();
        planets.planetArray.push(planet);
    }    

    for (let i = 0; i < stars.numStars; i++) {
        let star = new Star();
        stars.starArray.push(star);
    } 
}
// Going from title, animation to ending states; background and calling other functions
function draw() {
    background(4, 15, 51);
    for (let i = 0; i < stars.starArray.length; i++) {
      let star = stars.starArray[i];
      star.display();
    }
    
    waterRefill();
    foodRefill();
    runOut();

    if (state === `title`) {
      for (let i = 0; i < planets.planetArray.length; i++) {
        let planet = planets.planetArray[i];
        planet.display();
      }
        displayStartScreen();
    }
      else if (state === `animation`) {
        useArrowKeys();
        for (let i = 0; i < planets.planetArray.length; i++) {
          let planet = planets.planetArray[i];
          planet.display();
        }
        displayPlanets();
        for (let i = 0; i < asteroids.asteroidArray.length; i++) {
          let asteroid = asteroids.asteroidArray[i];
          asteroid.display(); 
          asteroid.move();
          asteroid.collision(astronaut);
        }
        displayBars();
        displayAstronaut();
      }
      else if (state === `ending`) {
        displayEndingScreen();
        spaceMusic.stop();
      }     
}
// Move the astroanut with the arrow keys Left, Right, Up and Down
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
  // How the astronaut moves
  astronaut.x = astronaut.x + astronaut.vx;
  astronaut.y = astronaut.y + astronaut.vy;
  // Constrain astronaut within canvas
  astronaut.x = constrain(astronaut.x, 0, width - astronaut.size);
  astronaut.y = constrain(astronaut.y, 0, height - astronaut.size);
}

function displayAstronaut() {
  image(astronautImage, astronaut.x, astronaut.y, astronaut.size, astronaut.size);
}

// Displaying food and water planets
function displayPlanets() {
// planet Water
  fill(planetWater.fill.r, planetWater.fill.g, planetWater.fill.b);
  ellipse(planetWater.x, planetWater.y, planetWater.size);
  fill(188, 216, 245);
  text(waterString, planetWater.x, planetWater.y);
// planet Food
  fill(planetFood.fill.r, planetFood.fill.g, planetFood.fill.b);
  ellipse(planetFood.x, planetFood.y, planetFood.size);
  fill(298, 240, 194);
  text(foodString, planetFood.x, planetFood.y);
}
// Game ends when food or water supply are too low
function runOut() {
  if (waterBar.l < 1) {
    state = `ending`;
  }
  else if (foodBar.l < 1) {
    state = `ending`;
  }
}
// pressing the mouse starts the game and music
function mousePressed() {
  if (state === `title`) {
    state = `animation`;
    spaceMusic.play();
  }
}
// display supply bars
function displayBars() {
  push();
  noStroke();
  rectMode(CORNER);
// Two white bars as background
  fill(255);
  rect(20, 50, 200, 20);
  rect(20, 100, 200, 20);
// blue bar that shows war supply and shortens over time
  fill(3, 150, 250);
  rect(waterBar.x, waterBar.y, waterBar.l, waterBar.h);
  waterBar.l = waterBar.l - waterBar.speed;
// green bar that shows food suppoly and shortens over time
  fill(18, 160, 8);
  rect(foodBar.x, foodBar.y, foodBar.l, foodBar.h);
  foodBar.l = foodBar.l - foodBar.speed;
  pop();
}
// When the astronaut hovers over the water planet, the water bar fills up
function waterRefill() {
  let d = dist(astronaut.x, astronaut.y, planetWater.x, planetWater.y);
  if (d < planetWater.size/2 + astronaut.size/2) {
    waterBar.l = 200;
  }
}
// When the astroansut hovers over the food planet, the food bar fills up
function foodRefill() {
  let d = dist(astronaut.x, astronaut.y, planetFood.x, planetFood.y);
  if(d < planetFood.size/2 + astronaut.size/2) {
    foodBar.l = 200;
  }
}
// Title screen display
function displayStartScreen() {
  rectMode(CENTER);
  // Background for instructions
  push();
  noStroke();
  fill(4, 15, 51);
  rect(width/2, height/4, 500, 150);
  // Instruction writting
  fill(181, 227, 247);
  textSize(20);
  text(instructionString, width / 2, height/ 4);
  pop();
  // start game button
  push();
  strokeWeight(2);
  fill(200, 50, 50);
  rect(width/2, height/2, 200, 50);
  pop();
  // Start game writting
  push();
  fill(255);
  text(titleString, width / 2, height / 2);
  pop();
}

function displayEndingScreen() {
  // Background square
  push();
  fill(0);
  rectMode(CENTER);
  rect(width/2, height/2, 500, 300);
  // Game over writting
  textSize(50);
  fill(255, 0, 0);
  text(endingString, width / 2, height / 2)
  pop();
}








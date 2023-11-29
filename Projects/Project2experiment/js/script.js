

"use strict";

let astronautImage;

function preload() {
    astronautImage = loadImage("assets/images/astronaut2.webp");
}

let astronaut = {
  x: 600,
  y: 50,
  vx: 0,
  vy: 0,
  speed: 7,
  size: 65
}

let stars = {
  starArray: [],
  numStars: 100,
}

let asteroids = {
  asteroidArray: [],
  numAsteroids: 3,
};

let planets = {
  planetArray: [],
  numPlanets: 11,
}

let planetWater = {
  x: 1100,
  y: 150,
  size: 225,
  fill: {
    r: 3,
    g: 150,
    b: 250
  }
}

let planetFood = {
  x: 150,
  y: 500,
  size: 225,
  fill: {
    r: 75,
    g: 201,
    b: 106
  }
}

let waterBar = {
  x: 20,
  y: 50,
  h: 20,
  l: 200,
  speed: 0.35
}
let foodBar = {
  x: 20,
  y:100,
  h: 20,
  l: 200,
  speed: 0.15
}

let titleString = "Start Game";
let instructionString = 
`Collect food and water for the astronaut,
      while avoiding the asteroids! 
  You can move the astronaut with the arrow keys.`;
let waterString = "WATER";
let foodString = "FOOD";
let endingString = "Game Over :(";
let state = `title`; 
// possible states are `title`, `animation`, `ending`

function setup() {

    createCanvas(windowWidth, windowHeight);
    textSize(30);
    textAlign(CENTER, CENTER);

    for (let i = 0; i < asteroids.numAsteroids; i++) {
        let asteroid = new Asteroid(i);
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
        fill(200, 50, 50);
        rectMode(CENTER);
        rect(width/2, height/2, 200, 50);
      fill(255);
      text(titleString, width / 2, height / 2);
      text(instructionString, width / 2, height/ 3);
      }
      else if (state === `animation`) {
        for (let i = 0; i < asteroids.asteroidArray.length; i++) {
          let asteroid = asteroids.asteroidArray[i];
          asteroid.display(); 
          asteroid.move();
          asteroid.collision(astronaut);
          }
        for (let i = 0; i < planets.planetArray.length; i++) {
          let planet = planets.planetArray[i];
          planet.display();
          }
        useArrowKeys();
        displayPlanets();
        displayBars();
        displayAstronaut();
      }
      else if (state === `ending`) {
        fill(250, 200, 200);
      rectMode(CENTER);
      rect(width/2, height/2, 200, 50);
      fill(255, 0, 0);
      text(endingString, width / 2, height / 2)
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
  text(waterString, planetWater.x, planetWater.y);

// planet Food
  fill(planetFood.fill.r, planetFood.fill.g, planetFood.fill.b);
  ellipse(planetFood.x, planetFood.y, planetFood.size);
  text(foodString, planetFood.x, planetFood.y);
}

function runOut() {
  if (waterBar.l < 1) {
    state = `ending`;
  }
  else if (foodBar.l < 1) {
    state = `ending`;
  }
}

function mousePressed() {
  if (state === `title`) {
      state = `animation`;
    }
  }

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









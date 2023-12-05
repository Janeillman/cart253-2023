

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
  fill(188, 216, 245);
  text(waterString, planetWater.x, planetWater.y);

// planet Food
  fill(planetFood.fill.r, planetFood.fill.g, planetFood.fill.b);
  ellipse(planetFood.x, planetFood.y, planetFood.size);
  fill(298, 240, 194);
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
      spaceMusic.play();
    }
  }

  function displayBars() {
    push();
    noStroke();
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
    pop();
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

  function displayStartScreen(){
    rectMode(CENTER);
    push();
    noStroke();
    fill(4, 15, 51);
    rect(width/2, height/4, 500, 150);
    fill(181, 227, 247);
    textSize(20);
    text(instructionString, width / 2, height/ 4);
    pop();
    push();
    strokeWeight(2);
    fill(200, 50, 50);
    rect(width/2, height/2, 200, 50);
    pop();
    push();
    fill(255);
    text(titleString, width / 2, height / 2);
    pop();
  }

  function displayEndingScreen(){
    push();
    fill(0);
    rectMode(CENTER);
    rect(width/2, height/2, 500, 300);
    textSize(50);
    fill(255, 0, 0);
    text(endingString, width / 2, height / 2)
    pop();
  }








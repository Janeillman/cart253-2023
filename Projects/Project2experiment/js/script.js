

"use strict";

let astronautImage;

function preload() {
    astronautImage = loadImage("assets/images/astronaut.webp");
}

let astronaut = {
    astronautArray: [],
}

let asteroids = {
    asteroidArray: [],
    numAsteroids: 3,
};


function setup() {

    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < asteroids.numAsteroids; i++) {
        let asteroid = new Asteroid();
        asteroids.asteroidArray.push(asteroid);
      }

      for (let i = 0; i < astronaut.length; i++) {
        let astronaut = new Astronaut();
        astronaut.astronautArray.push(astronaut);
      }
     
}



function draw() {

    background(0);

    for (let i = 0; i < asteroids.asteroidArray.length; i++) {
        let asteroid = asteroids.asteroidArray[i];
        asteroid.display(); 
        asteroid.move();
      }
}


"use strict";

let astronautImage;

function preload() {
    astronautImage = loadImage("assets/images/astronaut2.webp");
}

// let astronaut = {
//     astronautArray: [],
// }

let asteroids = {
    asteroidArray: [],
    numAsteroids: 3,
};

let planets = {
    planetArray: [],
    numPlanets: 11,
}


function setup() {

    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < asteroids.numAsteroids; i++) {
        let asteroid = new Asteroid();
        asteroids.asteroidArray.push(asteroid);
      }

    // for (let i = 0; i < astronaut.length; i++) {
    //     let astronaut = new Astronaut();
    //     astronaut.astronautArray.push(astronaut);
    //   }
    
    for (let i = 0; i < planets.numPlanets; i++) {
        let planet = new Planet();
        planets.planetArray.push(planet);
      }
     
}



function draw() {

    background(0);

    for (let i = 0; i < asteroids.asteroidArray.length; i++) {
        let asteroid = asteroids.asteroidArray[i];
        asteroid.display(); 
        asteroid.move();
      }

    // for (let i = 0; i < astronautArray.length; i++) {
    //     let astronaut = astronaut.astronautArray[i];
    //     astronaut.display(); 
    //     astronaut.move();
    //   }

    for (let i = 0; i < planets.planetArray.length; i++) {
        let planet = planets.planetArray[i];
        planet.display();
      }
}
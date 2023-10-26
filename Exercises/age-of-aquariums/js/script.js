/**
 * Shark Dinner
 * Jane
 * 
 * I wanted to make an ending screen appear once the shark had cornered all the fish 
 * into the bottom right corner, but I wasn't able to figure out how. 
 */

"use strict";

let school = [];
let schoolSize = 10;
let sharkImage;

function preload() {
    sharkImage = loadImage("assets/images/shark.avif");
}

let shark = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 7,
    size: 100
}
let endingStringOne = "Dinner time :)";
let endingStringTwo = "Hungry shark :(";
let state = `animation`;

function setup() {
    createCanvas(600,600);

    for (let i = 0; i < schoolSize; i++) {
      school[i] = createFish(random(0,width),random(0,height));
    }
}
function createFish(x, y) {
    let fish = {
      x: x,
      y: y,
      size: 50,
      vx: 0,
      vy: 0,
      speed: 8,
      escape: 3,
    };
    return fish;
}
function draw() {
        background(0);

    if (state === `animation`) { 
        for (let i = 0; i < schoolSize; i++) {
            moveFish(school[i]);
            displayFish(school[i]);
            }
        displayShark();
    }
    else if (state === `endingOne`) {
        fill(255);
        rectMode(CENTER);
        rect(width/2, height/2, 200, 50);
        fill(0);
        text(endingStringOne, width / 2, height / 2)
    }
    else if (state === `endingTwo`) {
        fill(255);
        rectMode(CENTER);
        rect(width/2, height/2, 200, 50);
        fill(0);
        text(endingStringTwo, width / 2, height / 2)
    }
}
function moveFish(fish) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
      fish.vx = random(-fish.speed, fish.speed);
      fish.vy = random(-fish.speed, fish.speed);
    }
  
    // Move the fish
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;
  
    // Constrain the fish to the canvas
    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);

    let d = dist(shark.x, shark.y, fish.x, fish.y);
        if (d < shark.size + fish.size) {
            swimAway(fish);
        }
}
function swimAway(fish) {
    fish.vx = fish.vx + fish.escape;
    fish.vy = fish.vy + fish.escape;
    
}
function displayFish(fish) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
}  
function displayShark() {
    image(sharkImage, shark.x, shark.y, shark.size, shark.size);
    shark.x = mouseX;
    shark.y = mouseY;
}
    

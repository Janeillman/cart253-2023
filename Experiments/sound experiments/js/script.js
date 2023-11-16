
"use strict";

let barkSFX;

function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`);
}



function setup() {
    createCanvas(600, 600);
}



function draw() {
    background(0);
}

function mousePressed() {
    barkSFX.play();
}
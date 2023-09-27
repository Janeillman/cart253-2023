/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

let caterpillar = {
    x: 100,
    y: 250,
    segmentSize: 100,
}





/**
 * Description of setup
*/

function setup() {
  createCanvas(500,500);
}

/**
 * Description of draw()
*/

function draw() {

    background(0);
    noStroke();
    fill(100, 200, 100);

    // let x = caterpillar.x;
    // let numSegments = 10;
    // let segmentsDrawn = 0;

    // while (segmentsDrawn < numSegments) {
    //     ellipse(x, caterpillar.y, caterpillar.segmentSize)
    //     x = x + 50;
    //     segmentsDrawn = segmentsDrawn + 1;
    // } 


    let x = caterpillar.x;
    let numSegments = 10;

for (let i = 0; i < numSegments; i++) {
    ellipse(x, caterpillar.y, caterpillar.segmentSize);
    x = x + 40;
}


    }

   


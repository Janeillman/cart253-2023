// Creading a class which stores the stars for the starry background
class Star {

    constructor(x, y) {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.size = 1.5;
    }
// how stars are displayed
    display() {
        push();
        stroke(255);
        ellipse(this.x,this.y,this.size, this.size);
        pop();
    }
}
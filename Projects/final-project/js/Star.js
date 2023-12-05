class Star {

    constructor(x, y) {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.size = 1.5;
    }

    display() {
        push();
        stroke(255);
        ellipse(this.x,this.y,this.size, this.size);
        pop();
    }
}
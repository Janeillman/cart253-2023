// class to store properties of background planets
class Planet {

    constructor(x,y) {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.size = random(20, 200);
        this.fill = {
            r: random(175,255),
            g: random(175,255),
            b: random(175,255)
          };
    }
    // Display planets at random spots and random colours
    display() {
        push();
        noStroke();
        fill(this.fill.r,this.fill.g,this.fill.b);
        ellipse(this.x,this.y,this.size);
        pop();
    }

}
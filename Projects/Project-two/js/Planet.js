class Planet {

    constructor(x,y) {
        this.x = random(0, 800);
        this.y = random(0, 600);
        this.size = random(20, 200);
        this.fill = {
            r: random(200,255),
            g: random(200,255),
            b: random(200,255)
          };
    }

    display() {
        push();
        noStroke();
        fill(this.fill.r,this.fill.g,this.fill.b);
        ellipse(this.x,this.y,this.size);
        pop();
    }

}
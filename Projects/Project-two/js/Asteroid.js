class Asteroid {
    
    constructor(x,y) {
        this.x = 100;
        this.y = 100;
        this.vx = 0;
        this.vy = 0;
        this.speed = 12;
        this.size = 100;
        this.fill = {
            r: 211,
            g: 212,
            b: 219,
        };
        this.spacing = {
          x: 500,
          y: 500
        };
    }

    move() {
        this.vx = this.speed;
      
          this.x = this.x + this.vx;
          this.y = this.y + this.vy;
          
        if (this.x > width) {
              this.x = 0;
              this.y = random(0, height);
          }
    }

    display() {
        fill(this.fill.r, this.fill.g, this.fill.b);
        ellipse(this.x, this.y, this.size);
    }

}
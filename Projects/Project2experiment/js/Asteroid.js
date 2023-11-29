class Asteroid {
    
    constructor(x, y, spacing) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.speed = 8;
        this.size = 100;
        this.fill = {
            r: 211,
            g: 212,
            b: 219,
        };
        this.spacing = spacing;
    }

    move() {
        this.vx = this.speed;
      
          this.x = this.x + this.vx;
          this.y = this.y + this.vy;
          
        if (this.x > width) {
              this.x = 0;
              this.y = this.y + this.spacing.y;
          }
    }

    display() {
        fill(this.fill.r, this.fill.g, this.fill.b);
        ellipse(this.x, this.y, this.size);
    }

    collision(astronaut) {
        let d = dist(astronaut.x, astronaut.y, this.x, this.y);
          if(d < this.size/2 + astronaut.size/2) {
          state = `ending`;
          }
    }

}
class Asteroid {
    
    constructor(x, y) {
        this.x = -500;
        this.y = random(0, height);
        this.vx = 0;
        this.vy = 0;
        this.speed = 8;
        this.size = 75;
        this.fill = {
            r: 211,
            g: 212,
            b: 219,
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

    collision(astronaut) {
        let d = dist(astronaut.x, astronaut.y, this.x, this.y);
          if(d < this.size/2 + astronaut.size/2) {
          state = `ending`;
          }
    }

}
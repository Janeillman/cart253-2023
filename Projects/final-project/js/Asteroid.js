// class to store properties of asteroids
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
    // method to describe how asteroids move; go accross the screen from the left
    move() {
        this.vx = this.speed;
      
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
          
        if (this.x > width) {
              this.x = 0;
              this.y = random(0, height);
        }
    }
    // display as grey circles
    display() {
        push();
        strokeWeight(5);
        fill(this.fill.r, this.fill.g, this.fill.b);
        ellipse(this.x, this.y, this.size);
        pop();
    }
    // use parameter to introduce collision property and end game
    collision(astronaut) {
        let d = dist(astronaut.x, astronaut.y, this.x, this.y);
          if(d < this.size/2 + astronaut.size/2) {
          state = `ending`;
          }
    }

}
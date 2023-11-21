class Astronaut {
    constructor(x,y) {
        this.x = 600;
        this.y = 50;
        this.vx = 0;
        this.vy = 0;
        this.speed = 7;
        this.size = 100;
    }

    move() {
        if (keyIsDown(LEFT_ARROW)) {
            astronaut.vx = -astronaut.speed;
          }
          else if (keyIsDown(RIGHT_ARROW)) {
            astronaut.vx = astronaut.speed;
          }
          else {
            astronaut.vx = 0;
          }
          if (keyIsDown(UP_ARROW)) {
            astronaut.vy = -astronaut.speed;
          }
          else if (keyIsDown(DOWN_ARROW)) {
            astronaut.vy = astronaut.speed;
          }
          else {
            astronaut.vy = 0;
          }
        
          astronaut.x = astronaut.x + astronaut.vx;
          astronaut.y = astronaut.y + astronaut.vy;
    }

    display() {
      
      }
}
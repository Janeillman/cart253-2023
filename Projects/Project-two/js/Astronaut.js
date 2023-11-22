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
            this.vx = -this.speed;
          }
          else if (keyIsDown(RIGHT_ARROW)) {
            this.vx = this.speed;
          }
          else {
            this.vx = 0;
          }
          if (keyIsDown(UP_ARROW)) {
            this.vy = -this.speed;
          }
          else if (keyIsDown(DOWN_ARROW)) {
            this.vy = this.speed;
          }
          else {
            this.vy = 0;
          }
        
          this.x = this.x + this.vx;
          this.y = this.y + this.vy;
    }

    display() {
      image(this. astronautImage, this.x, this.y, this.size, this.size);
      }
}
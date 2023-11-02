class Platform {

    constructor(w,h) {
      this.width = w;
      this.height = h;
      this.x = 300;
      this.y = 200;
      this.vx = 0;
      this.vy = 0;
      this.speed = 3;
    }
  
    move(platform) {
        if (keyIsDown(LEFT_ARROW)) {
            this.x = this.x - this.speed;
          }
          else if (keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + this.speed;
          }
    }

    bounce(platform) {
        if (this.x > platform.x - platform.width/2 &&
            this.x < platform.x + platform.width/2 &&
            this.y + this.size/2 > platform.y - platform.height/2 &&
            this.y - this.size/2 < platform.y + platform.height/2) {
    
          // Bounce
          let dx = this.x - platform.x;
          this.vx = this.vx + map(dx,-platform.width/2,platform.width/2,-2,2);
    
          this.vy = -this.vy;
          this.ay = 0;
        }
      }
    
  
    display() {
      push();
      fill(255);
      noStroke();
      rectMode(CENTER);
      rect(this.x,this.y,this.width,this.height);
      pop();
    }
  
  }
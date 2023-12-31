class Ball {

    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.vx = 0;
      this.vy = 0;
      this.ax = 0;
      this.ay = 0;
      this.maxSpeed = 10;
      this.size = 40;
      this.active = true;
      this.fill = {
        r: 50,
        g: 50,
        b: 100
      };
      this.saved = 170;
    }
  
    gravity(force) {
      this.ay = this.ay + force;
    }
  
    move() {
      this.vx = this.vx + this.ax;
      this.vy = this.vy + this.ay;
  
      this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
      this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);
  
      this.x = this.x + this.vx;
      this.y = this.y + this.vy;
  
      if (this.y - this.size/2 > height) {
        this.active = false;
      }
    }
  
    bounce(paddle) {
      if (this.x > paddle.x - paddle.width/2 &&
          this.x < paddle.x + paddle.width/2 &&
          this.y + this.size/2 > paddle.y - paddle.height/2 &&
          this.y - this.size/2 < paddle.y + paddle.height/2) {
  
        // Bounce
        let dx = this.x - paddle.x;
        this.vx = this.vx + map(dx,-paddle.width/2,paddle.width/2,-2,2);
  
        this.vy = -this.vy;
        this.ay = 0;
        this.fill.g = this.fill.g + 20;

      }
    }
  
    display() {
      push();
      fill(this.fill.r, this.fill.g, this.fill.b);
      stroke(0);
      ellipse(this.x,this.y,this.size);
      pop();
    }
  
  }
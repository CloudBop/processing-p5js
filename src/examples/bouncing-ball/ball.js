// import {color, ellipse, height, width} from 'p5';
export default class Ball {
  constructor(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.d = 2*r;
    this.xVelocity = -4;
    this.yVelocity = 3;
  }

  show(p5){
    
    p5.color(255);
    p5.ellipse(this.x,this.y, this.d, this.d)
  }

  move(p5){
    // increment
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.bounce(p5);
  }

  bounce(p5){
    // console.log(this.x)
    // console.log(this.y)
    // if smaller or larger than x
    if(this.x - this.r <=0 || this.x+this.r >= p5.width){
      // reverse
      this.xVelocity *=-1;
    }
    // if smaller or larger than y
    if(this.y - this.r <=0 || this.y + this.r >= p5.height){
      // reverse
      this.yVelocity *=-1;
    }
  }
}
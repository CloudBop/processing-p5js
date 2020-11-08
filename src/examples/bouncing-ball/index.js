import p5js from 'p5';
import Ball from './ball.js'

let ball;
export default new p5js ( (p5)=>{

  p5.setup=()=>{  
    p5.createCanvas(window.innerWidth, window.innerHeight);
    // start ball in center
    ball = new Ball(p5.width/2, p5.height/2, 20)
  }

  p5.draw = function(){
    p5.background(55);
    ball.show(p5);
    ball.move(p5);
  }

}, 'p5container')
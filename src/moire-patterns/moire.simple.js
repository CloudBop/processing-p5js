// go to /node_modules and get p5.js
import p5 from 'p5';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5ctx =  new p5(
  // now we can use p5 object|class|instance
  (p5) => {
    // all the processing goes here...
    // only invoked once
    p5.setup = ()=>{
      // create a graphic
      let gfx = p5.createGraphics(window.innerWidth,window.innerHeight);
      // create black cvs
      p5.createCanvas(window.innerWidth,window.innerHeight);
      p5.background(0,0,0);
      //gfx properties 
      gfx.stroke(200,0,0);
      gfx.strokeWeight(3);
      // diagnostic line for rotation
      // gfx.line(0,0,window.innerWidth,innerHeight);
      //
      for(let i=0;i<1000;i++){
        // random points
        gfx.point(
          Math.random() *window.innerWidth,
          Math.random() *window.innerHeight
          );
        }
      p5.image(gfx,0,0);
      // duplicate gfx
      const gfx2 = {...gfx}
      // default is radians
      p5.angleMode(p5.DEGREES);
      // rotate from center as opposed to x&y === 0
      p5.imageMode(p5.CENTER);
      // ...this offsets image in viewport Translate half a screen in X and Y
      p5.translate(window.innerWidth/2,window.innerHeight/2);
      // rotate and offset x,y
      p5.rotate(50)
      p5.image(gfx2,100,0);
    }
    // 
    p5.draw = ()=>{
      // frameRate || deltaTime
    }
  }
)

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

export default p5ctx
// moire patterns
// credit - https://medium.com/front-end-weekly/learning-the-p5-canvas-drawing-library-in-es6-and-webpack-bf514a679544
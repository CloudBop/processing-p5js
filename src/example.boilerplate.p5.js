// go to /node_modules and get p5.js
import p5ctx from 'p5';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  (p5) => {
    // all the processing goes here...
    p5.setup = ()=>{
      // only invoked once
      p5.createCanvas(window.innerWidth, window.innerHeight)
      // color (rgb)
      p5.background(90,20,10)
    }
    // 
    p5.draw = ()=>{
      // frameRate || deltaTime
    }
  }
)


export default p5
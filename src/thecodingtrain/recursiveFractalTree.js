// go to /node_modules and get p5.js
import p5ctx from 'p5';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  (p5) => {
    // all the processing goes here...
    p5.setup = ()=>{
      // only invoked once
      p5.createCanvas(400, 400)
      // color (rgb)
      p5.background(51)      
    }
    // 
    p5.draw = ()=>{
      // frameRate || deltaTime
      const len = 100;
      p5.stroke(255);
      p5.translate(200, p5.height);
      branch(len);
    }


    function branch(len){
      p5.line(0, 0, 0, -len);
    }
  }
)





export default p5
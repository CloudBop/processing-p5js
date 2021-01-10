// go to /node_modules and get p5.js
import p5ctx from 'p5';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  (p5) => {
    // all the processing goes here...
    let angle = 0, slider;
    // only invoked once
    p5.setup = ()=>{
      p5.createCanvas(400, 400)
      slider = p5.createSlider(0, p5.TWO_PI, p5.PI/4, 0.1)
      slider.position(10, 1);
    }
    // 
    p5.draw = ()=>{
      p5.frameRate(20);
      // without the background we see every iteration
      p5.background(51)
      p5.stroke(255);
      p5.translate(200, p5.height);
      angle= slider.value();
      branch(100);
    }

    function branch(len){
      p5.line(0, 0, 0, -len);
      p5.translate(0, -len);
      p5.rotate(angle);
      // recursion!
      if(len>4){
        branch( len*0.67);
      }
    }
  }
)
//
export default p5
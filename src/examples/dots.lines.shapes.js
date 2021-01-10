// go to /node_modules and get p5.js
import p5ctx from 'p5';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can use p5 object|class|instance
  (p5) => {
    // all the processing goes here...
    // only invoked once
    p5.setup = ()=>{
      //
      p5.createCanvas(window.innerWidth, window.innerHeight)
      p5.background(90,6,3)
      p5.stroke(200,0,0);
      p5.strokeWeight(3);
      
      const x=150,y=150,width=200,height=200; 
      // call settings before invoking shape
      p5.fill('#000');
      p5.rect(x,y,width,height);
      //
      // const x1= 0,y1= 0,x2=window.innerWidth, y2=window.innerHeight;

      const x1= window.innerWidth/2,
        y1= window.innerHeight/2, 
        x2=window.innerWidth, 
        y2=window.innerHeight;
      // Puts the sketch into Hue, Saturation and Brightness mode
      p5.colorMode('HSB');
      p5.stroke('#678');
      p5.line(x1,y1,x2,y2);
      //                0         1         2      3     4
      const colors = ['#465','#11d442','#465','#112','#c541af']

      // - Primitive Types
      // numbers, strings, booleans, 
      // complex types - objects 
      // array [] 
      // object { name: leo}
      // functions ()

      for(let i=0;i<1000;i++){

        const rand = Math.floor(getRandomArbitrary(0,5))
        // - color 
        p5.stroke(colors[rand])
        // - 
        p5.point(Math.random() * window.innerWidth , Math.random()* window.innerHeight);
      }
    }
    // 
    p5.draw = ()=>{
      // frameRate || deltaTime
      // p5.background(90,6,3)
    }
  }
)


function getRandomArbitrary(min, max) {
  // Math.random() 0.1   0.283047 0.73837
  return Math.random() * (max - min) + min;
}

export default p5
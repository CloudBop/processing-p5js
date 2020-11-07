// go to /node_modules and get p5.js
import p5 from 'p5';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5ctx =  new p5(
  // now we can use p5 object|class|instance
  (p5) => {
    // all the processing goes here...
    // only invoked once
    p5.setup = ()=>{
      //
      p5.createCanvas(window.innerWidth, window.innerHeight)
      p5.background(0,0,0)
      //       
      // Puts the sketch into Hue, Saturation and Brightness mode
      p5.colorMode('HSB');
      //
      const colors = ['#465','#11d442','#465','#112','#221']
      //
      for(let i=0;i<1000;i++){
        //
        //const rand = Math.floor(getRandomArbitrary(0,4))
        
        p5.stroke('rgba(255,204,0,0.5)');
        p5.strokeWeight(3)
        p5.point(Math.random() * window.innerWidth,Math.random()* window.innerHeight);
      }
  
    }
    // 
    p5.draw = ()=>{
      // frameRate || deltaTime
    }
  }
)


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default p5ctx
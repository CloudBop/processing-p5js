// This is for a unit test tutorial.
// it should create a rectangle and allow you to iterate over
// every single color.
//
// colorValueIncrease sets the amount the color changes on each
// draw loop. Values greater than 255 will break the sketch.
// fillColor will be the color of the rectangle.
// colorIncreaser will become an instance of our ColorIncreaser class.

// go to /node_modules and get p5.js
import p5ctx from 'p5';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  (p5) => {
    // all the processing goes here...
    let colorValueIncrease = 1;
    let fillColor;
    let colorIncreaser;
    
    p5.setup = () => {
      p5.createCanvas(500, 500);
      p5.background(0);
      fillColor = p5.color(0, 0, 0, 255);
      p5.noStroke();
    }

    p5.draw = () => {
      p5.fill(fillColor);
      p5.rect(0, 0, 500, 500);

      // increment the red value
      fillColor.levels[0] += colorValueIncrease;
      // If the red value is maxed out increment the green value
      // and reset the red value.
      if (fillColor.levels[0] > 255) {
        fillColor.levels[0] = 0;
        fillColor.levels[1] += colorValueIncrease;
      }
      // If the green value is maxed out increment the blue value
      // and reset the green value.
      if (fillColor.levels[1] > 255) {
        fillColor.levels[1] = 0;
        fillColor.levels[2] += colorValueIncrease;
      }
      // If the blue value is maxed out reset the green value.
      if (fillColor.levels[2] > 255) {
        fillColor.levels[2] = 0;
      }
    }
  }
)


export default p5



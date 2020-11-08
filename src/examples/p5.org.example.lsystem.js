// go to /node_modules and get p5.js
import p5ctx from 'p5';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  // console.log(p5), no access beofre init
  (p5) => {
    // TURTLE STUFF:
    let x, y; // the current position of the turtle
    let currentangle = 0; // which way the turtle is pointing
    let step = 20; // how much the turtle moves with each 'F'
    let angle = 90; // how much the turtle turns with a '-' or '+'

    // LINDENMAYER STUFF (L-SYSTEMS)
    let thestring = 'A'; // "axiom" or start of the string
    let numloops = 5; // how many iterations to pre-compute
    let therules = []; // array for rules
    therules[0] = ['A', '-BF+AFA+FB-']; // first rule
    therules[1] = ['B', '+AF-BFB-FA+']; // second rule

    let whereinstring = 0; // where in the L-system are we?

    p5.setup = () => {
      p5.createCanvas(710, 400);
      p5.background(255);
      p5.stroke(0, 0, 0, 255);

      // start the x and y position at lower-left corner
      x = 0;
      y = p5.height-1;

      // COMPUTE THE L-SYSTEM
      for (let i = 0; i < numloops; i++) {
        thestring = lindenmayer(thestring);
      }
    }

    p5.draw = () => {
      // draw the current character in the string:
      drawIt(thestring[whereinstring]);
      // increment the point for where we're reading the string.
      // wrap around at the end.
      whereinstring++;
      if (whereinstring > thestring.length-1) whereinstring = 0;

    }

    // interpret an L-system
    function lindenmayer(s) {
      let outputstring = ''; // start a blank output string

      // iterate through 'therules' looking for symbol matches:
      for (let i = 0; i < s.length; i++) {
        let ismatch = 0; // by default, no match
        for (let j = 0; j < therules.length; j++) {
          if (s[i] == therules[j][0])  {
            outputstring += therules[j][1]; // write substitution
            ismatch = 1; // we have a match, so don't copy over symbol
            break; // get outta this for() loop
          }
        }
        // if nothing matches, just copy the symbol over.
        if (ismatch == 0) outputstring+= s[i];
      }

      return outputstring; // send out the modified string
    }

    // this is a custom function that draws turtle commands
    function drawIt(k) {

      if (k=='F') { // draw forward
        // polar to cartesian based on step and currentangle:
        let x1 = x + step*p5.cos(p5.radians(currentangle));
        let y1 = y + step*p5.sin(p5.radians(currentangle));
        p5.line(x, y, x1, y1); // connect the old and the new

        // update the turtle's position:
        x = x1;
        y = y1;
      } else if (k == '+') {
        currentangle += angle; // turn left
      } else if (k == '-') {
        currentangle -= angle; // turn right
      }

      // give me some random color values:
      // let r = p5.random(128, 255);
      // let g = p5.random(0, 192);
      // let b = p5.random(0, 50);
      // let a = p5.random(50, 100);

      // pick a gaussian (D&D) distribution for the radius:
      // let radius = 0;
      // radius += p5.random(0, 15);
      // radius += p5.random(0, 15);
      // radius += p5.random(0, 15);
      // radius = radius / 3;

      // draw the stuff:
      // p5.fill(r, g, b, a);
      // p5.ellipse(x, y, radius, radius);

      p5.ellipse(x, y, 5, 5);
    }

  }
)


export default p5

// let x, y; // the current position of the turtle
// let currentangle = 0; // which way the turtle is pointing
// let step = 20; // how much the turtle moves with each 'F'
// let angle = 90; // how much the turtle turns with a '-' or '+'

// // LINDENMAYER STUFF (L-SYSTEMS)
// let thestring = 'A'; // "axiom" or start of the string
// let numloops = 5; // how many iterations to pre-compute
// let therules = []; // array for rules
// therules[0] = ['A', '-BF+AFA+FB-']; // first rule
// therules[1] = ['B', '+AF-BFB-FA+']; // second rule

// let whereinstring = 0; // where in the L-system are we?

// function setup() {
//   createCanvas(710, 400);
//   background(255);
//   stroke(0, 0, 0, 255);

//   // start the x and y position at lower-left corner
//   x = 0;
//   y = height-1;

//   // COMPUTE THE L-SYSTEM
//   for (let i = 0; i < numloops; i++) {
//     thestring = lindenmayer(thestring);
//   }
// }

// function draw() {

//   // draw the current character in the string:
//   drawIt(thestring[whereinstring]);

//   // increment the point for where we're reading the string.
//   // wrap around at the end.
//   whereinstring++;
//   if (whereinstring > thestring.length-1) whereinstring = 0;

// }

// // interpret an L-system
// function lindenmayer(s) {
//   let outputstring = ''; // start a blank output string

//   // iterate through 'therules' looking for symbol matches:
//   for (let i = 0; i < s.length; i++) {
//     let ismatch = 0; // by default, no match
//     for (let j = 0; j < therules.length; j++) {
//       if (s[i] == therules[j][0])  {
//         outputstring += therules[j][1]; // write substitution
//         ismatch = 1; // we have a match, so don't copy over symbol
//         break; // get outta this for() loop
//       }
//     }
//     // if nothing matches, just copy the symbol over.
//     if (ismatch == 0) outputstring+= s[i];
//   }

//   return outputstring; // send out the modified string
// }

// // this is a custom function that draws turtle commands
// function drawIt(k) {

//   if (k=='F') { // draw forward
//     // polar to cartesian based on step and currentangle:
//     let x1 = x + step*cos(radians(currentangle));
//     let y1 = y + step*sin(radians(currentangle));
//     line(x, y, x1, y1); // connect the old and the new

//     // update the turtle's position:
//     x = x1;
//     y = y1;
//   } else if (k == '+') {
//     currentangle += angle; // turn left
//   } else if (k == '-') {
//     currentangle -= angle; // turn right
//   }

//   // give me some random color values:
//   let r = random(128, 255);
//   let g = random(0, 192);
//   let b = random(0, 50);
//   let a = random(50, 100);

//   // pick a gaussian (D&D) distribution for the radius:
//   let radius = 0;
//   radius += random(0, 15);
//   radius += random(0, 15);
//   radius += random(0, 15);
//   radius = radius / 3;

//   // draw the stuff:
//   fill(r, g, b, a);
//   ellipse(x, y, radius, radius);
// }
// This sketch creates an automated drawing based on a Lindenmayer or (L-) system. L-systems are often used in procedural graphics to make natural, geometric, or interesting "fractal-style" patterns.
// Example created by R. Luke DuBois.

    // all the processing goes here...
    // /console.log("================================================================")
    // /console.log(p5),
    // /console.log(p5ctx),

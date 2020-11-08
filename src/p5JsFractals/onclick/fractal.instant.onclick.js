// go to /node_modules and get p5.js
import p5 from 'p5';
import { Point, DrawingState, renderAGeneration } from '../helpers.js'
import {tree as currentLsystem} from '../l-systems.js'
import userInterface from '../userInterface.js'

const CANVAS_BOUNDS = new Point(window.innerWidth, window.innerHeight)

// create a new p5 instance. docs - https://p5js.org/reference/
const p5ctx =  new p5(
  // invoke p5 with function 
  (p5) => {
    // p5 is in local scope
    // all the processing goes here...
    p5.setup = ()=>{
      // only invoked once
      p5.createCanvas(CANVAS_BOUNDS.x,  CANVAS_BOUNDS.y)
      p5.background("#563423")
      p5.stroke('#fff')
      // default radians
      p5.angleMode(p5.DEGREES);
      // The noLoop() function causes draw() to only execute once. Without calling noLoop(), the code inside draw() is run continually.
      p5.noLoop();
    }
    let count =0, isCount=false;
    // let isCount =false
    // turtle like co-ordinate drawing.
    const drawForward = (drawingState, params)=> {
      let {x, y} = drawingState.state.position;
      // geometry
      let d = drawingState.state.direction;
      let newX = x + params.length * p5ctx.cos(d);
      let newY = y + params.length * p5ctx.sin(d);
      // https://p5js.org/reference/#/p5/push
      
      // only count if true 
      if(isCount) count++
      
      setTimeout(()=>{
        p5.push(); // Start a new drawing state
        p5.strokeWeight(drawingState.state.strokeWeight || 1);
        p5.line(x, y, newX, newY);
        p5.pop(); // restore drawing state
        //
        // - throw function on event loop and call after count * 10 =
        //
      },count* userInterface.number.value )
      // update drawing state
      drawingState.state.position.x = newX;
      drawingState.state.position.y = newY;
    };

  // 'connect' drawForward() to be callable as method of currentLsystem
  currentLsystem.commands.F = drawForward
  const numIters = currentLsystem.iterations || 5;
  p5.mouseClicked =()=> {
    //
    // if(count >0) return;
    count = 0;
    isCount = userInterface.checkbox.checked ? true : false;
    //
    const origin = new Point(p5ctx.mouseX, p5ctx.mouseY);
    // for ease of reference
    let systemState = currentLsystem.axiom;
    //
    for (let i = 1; i < numIters; i++) {
      // new drawingState instance
      const drawingState = new DrawingState(origin, -90, 2);
      // basecase 
      const shouldDraw = i === numIters - 1;
      systemState = renderAGeneration(currentLsystem, systemState, drawingState, shouldDraw);
      //
    }
  }
});


// log next if exist on current tree
  // by default list first iteration
  let systemState = currentLsystem.axiom
  userInterface.log(systemState);
  // log next if exist on current tree
  for (let i = 0; i < currentLsystem.iterations; i++) {
    systemState = renderAGeneration(currentLsystem, systemState);
    userInterface.log(systemState);
  }

export default p5ctx;
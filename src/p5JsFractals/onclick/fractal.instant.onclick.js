// go to /node_modules and get p5.js
import p5 from 'p5';
import { Point, DrawingState, renderAGeneration } from '../helpers.js'
import {angular as currentLsystem} from '../l-systems.js'
const CANVAS_BOUNDS = new Point(500, 500);

// create a new p5 instance. docs - https://p5js.org/reference/
const p5ctx =  new p5(
  // invoke p5 with function 
  (p5) => {
    // p5 is in local scope
    // all the processing goes here...
    p5.setup = ()=>{
      // only invoked once
      p5.createCanvas(CANVAS_BOUNDS.x,  CANVAS_BOUNDS.y)
      // color (rgb)
      p5.background(90,20, 0)
      //
      p5.stroke('#fff')
      p5.angleMode(p5.DEGREES);
      p5.noLoop();
    }

  // turtle like co-ordinate drawing.
  const drawForward = (drawingState, params)=> {
    let {x, y} = drawingState.state.position;
    let d = drawingState.state.direction;
    let newX = x + params.length * p5ctx.cos(d);
    let newY = y + params.length * p5ctx.sin(d);
    // tell p5js
    p5.push();
    p5.strokeWeight(drawingState.state.strokeWeight || 1);
    p5.line(x, y, newX, newY);
    p5.pop();
    // update 
    drawingState.state.position.x = newX;
    drawingState.state.position.y = newY;
  };
  // 'connect' drawForward() to be callable - within currentLsystem
  currentLsystem.commands.F = drawForward
  const numIters = currentLsystem.iterations || 5;
  // click evt
  p5.mouseClicked =()=> {
    //
    const origin = new Point(p5ctx.mouseX, p5ctx.mouseY);
    //
    let systemState = currentLsystem.axiom;
    //     
    for (let i = 1; i < numIters; i++) {
      // 
      const drawingState = new DrawingState(origin, -90, 2);
      // basecase 
      const shouldDraw = i === numIters - 1;
      //
      systemState = renderAGeneration(currentLsystem, systemState, drawingState, shouldDraw);
    }
  }
})

export default p5ctx
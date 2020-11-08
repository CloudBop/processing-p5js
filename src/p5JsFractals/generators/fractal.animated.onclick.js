import p5 from 'p5'
import { Point, DrawingState, renderAGeneration, drawSystem, fragmentGenerator } from '../helpers.js'
import { tree as currentLsystem } from '../l-systems.js'
const CANVAS_BOUNDS = new Point(window.innerWidth, window.innerHeight);

export default new p5(
  (p5)=>{
    // invoked in method of L-system
    function drawForward(drawingState, params) {
      
      // destructure of x y
      let {x, y} = drawingState.state.position;
      // 
      // geometry
      let d = drawingState.state.direction;
      let newX = x + params.length * p5.cos(d);
      let newY = y + params.length * p5.sin(d);
      //
      p5.push();
      p5.strokeWeight(drawingState.state.strokeWeight || 1);
      p5.line(x, y, newX, newY);
      p5.pop();
      // update
      drawingState.state.position.x = newX;
      drawingState.state.position.y = newY;
    };  
    
    p5.setup = () => {
      p5.createCanvas(CANVAS_BOUNDS.x, CANVAS_BOUNDS.y);
      p5.angleMode(p5.DEGREES);
      p5.noLoop();
      p5.textSize(32);
      p5.fill(0, 102, 153);
      p5.text('generators', 10, 30);
    }
  
    let numIters = 3 || currentLsystem.iterations;
    currentLsystem.commands.F = drawForward
    
    //
    p5.mouseClicked = async () => {
      //
      const origin = new Point(p5.mouseX, p5.mouseY);
      //
      let systemAxiomState = currentLsystem.axiom;
      //
      for (let i = 1; i < numIters - 1; i++) {
        systemAxiomState = renderAGeneration(currentLsystem, systemAxiomState);
      }
      // drawing state kept in stack LIFO
      const drawingState = new DrawingState(origin, +90);
      // 
      const fragmentIterator = fragmentGenerator(currentLsystem, systemAxiomState);
      //
      drawSystem(currentLsystem, fragmentIterator, drawingState);
    }
})


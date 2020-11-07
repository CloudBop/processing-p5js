const CANVAS = {
  x: 1000, 
  y: 1000
}
// 
class DrawingState {
  // 
  constructor(position, direction, strokeWeight) {
    this.state = Object.create(null);
    this.state.position = position && new Point(position.x, position.y) || new Point(0, 0);
    this.state.direction = direction || 0; // right
    this.state.strokeWeight = strokeWeight || 1
    this.stack = [];
    this._count=0
  }
  // 
  push() {
    this._count++
    this.stack.push(JSON.stringify(this.state));
    // console.log(this.stack)
  }
  pop() {
    this.state = JSON.parse(this.stack.pop() || '{}');

  }
  get depth() {
    return this.stack.length;
  }
}

class Point {
  constructor(xOrPoint, y) {
    // 
    if (xOrPoint.x !== undefined && xOrPoint.y !== undefined) {
      this.x = xOrPoint.x;
      this.y = xOrPoint.y;
    } else {
      this.x = xOrPoint;
      this.y = y;
    }
  }
}

function applyRule(rules, char) {
  return rules[char] || char;
}

function renderAGeneration (l_system, previousGeneration, drawingState, draw=false) {
  //
  let nextGeneration = '';
  //
  for (const character of previousGeneration) {
    //
    const nextCharacters = applyRule(l_system.rules, character);
    // concatenate string
    nextGeneration += nextCharacters;
    //
    //
    //
    if (draw) {
      
      for (const character of nextCharacters) {
        
        if (l_system.commands[character]) {
          // 
         l_system.commands[character](drawingState, l_system.params);
       }
      }
    }
  }
  //
  return nextGeneration;
}
//
export { Point, DrawingState, CANVAS, renderAGeneration }
//
//
// function drawForward(drawingState, params, ctx) {
//   let {x, y} = drawingState.state.position;
//   let d = drawingState.state.direction;
//   let newX = x + params.length * p5.cos(d);
//   let newY = y + params.length * p5.sin(d);
//   p5.push();
//   p5.strokeWeight(drawingState.state.strokeWeight || 1);
//   p5.line(x, y, newX, newY);
//   p5.pop();
//   drawingState.state.position.x = newX;
//   drawingState.state.position.y = newY;
// };
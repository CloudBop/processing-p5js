// rules

// Character        Meaning
//  F	         Move forward by line length drawing a line
//  f	         Move forward by line length without drawing a line
//  +	         Turn left by turning angle
//  -	         Turn right by turning angle
//  |	         Reverse direction (ie: turn by 180 degrees)
//  [	         Push current drawing state onto stack
//  ]	         Pop current drawing state from the stack
//  #	         Increment the line width by line width increment
//  !	         Decrement the line width by line width increment
//  @	         Draw a dot with line width radius
//  {	         Open a polygon
//  }	         Close a polygon and fill it with fill colour
//  >	         Multiply the line length by the line length scale factor
//  <	         Divide the line length by the line length scale factor
//  &	         Swap the meaning of + and -
//  (	         Decrement turning angle by turning angle increment
//  )	         Increment turning angle by turning angle increment

const baseCommands = {
  // assign inside p5 scope
  'F': null,
  //
  '-'(drawingState, params) {
    drawingState.state.direction -= params.angle;
  },
  //
  '+'(drawingState, params) {
    drawingState.state.direction += params.angle;
  },
  //
  '['(drawingState) {
    drawingState.push();
  },
  //
  ']'(drawingState) {
    drawingState.pop();
  },
}
export default baseCommands;
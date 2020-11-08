import baseCmds from './base.cmds.js'
const tree = {
  iterations: 3,
  params: {
    // 
    angle: 137.5,
    length: 8,
  },
  axiom: 'X',
  rules: {
    X: 'F[-X][X]F[-X]+FX+FX',
    F: 'FF',
  },
  commands: baseCmds
}

//
// axiom_pattern
//     _
//   _| |  _
//      |_|

// F Move forward by line length drawing a line
// + Turn left by turning angle
// - Turn left by turning angle
const angular = {
  // careful on worse algos
  iterations: 3,
  params: {
    angle: 90,
    length: 20,
  },
  //
  axiom: 'F+F+F+F',
  rules: {
    X: 'F[-X][X]F[-X]+FX',
    F: 'F+F-F-FF+F+F-F',
  },
  commands: baseCmds
}

export { tree, angular } ;
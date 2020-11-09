import baseCmds from './base.cmds.js'
//
// axiom_pattern
//     _
//   _| |  _
//      |_|

// F Move forward by line length drawing a line
// + Turn left by turning angle
// - Turn left by turning angle

const tree = {
  iterations: 3,
  params: {
    
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
const sarahs_fractal = {
  // careful on worse algos
  iterations: 2,
  params: {
    angle: 112,
    length: 70,
  },
  //
  axiom: 'F+F+F+F',
  rules: {
    X: 'F[-X][X]F[-X]+FX',
    F: 'F+F+F-F-FF+F+F-F',
  },
  commands: baseCmds
}

const angular = {
  iterations: 2,
  params: {
    angle: 90,
    length: 11,
  },
  axiom: 'F+F+F+F',
  axiom_pattern: `
    _
  _| |  _
     |_|
  `,
  rules: {
    X: 'F[-X][X]F[-X]+FX',
    F: 'F+F-F-FF+F+F-F',
  },
  commands: baseCmds
}
//
const testing = {
  axiom: 'A', // "axiom" or start of the string
  iterations:  5, // how many iterations to pre-compute
  rules: {
    A: '-BF+AFA+FB-',
    B: '+AF-BFB-FA+'
  } // array for rules
  
}


export { tree, sarahs_fractal, angular } ;
import baseCmds from './base.cmds.js'
const tree = {
  iterations: 3,
  params: {
    angle: 25,
    length: 2,
  },
  axiom: 'X',
  rules: {
    X: 'F[-X][X]F[-X]+FX',
    F: 'FF',
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

export { tree, angular } ;
// go to /node_modules and get p5.js
import p5ctx from 'p5';

var axiom = "A"
var sentence = axiom;
var rules = []
rules[0] = {
  a: "A",
  b: "ABC"
}
rules[1] = {
  a: "B",
  b: "A"
}



function generate() {

  let nextSentence=""
  
  for (let i = 0; i < sentence.length; i++) {
    
    var currentChar = sentence.charAt(i);
    var found = false;
    
    for (let j = 0; j < rules.length; j++) {
       
      if(currentChar == rules[j].a) {
        found = true;
        nextSentence+= rules[j].b;
        // if rule found stop loop
        break;
      } 
    }
    // no rule
    if(!found) {
      nextSentence += currentChar
    }
  }
  // update
  sentence = nextSentence;
  p5.createP(sentence)
}

// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  (p5) => {
    // all the processing goes here...
    p5.setup = ()=>{
      // only invoked once
      // p5.createCanvas(400, 400)
      // p5.noCanvas();
      p5.createP(axiom)
      
      const btn = p5.createButton("generate")
      btn.mousePressed(generate)


    }
    //
    p5.draw = ()=>{
      // without a background we see all the iterations made
      // p5.stroke(255);
    }
  }
)

export default p5
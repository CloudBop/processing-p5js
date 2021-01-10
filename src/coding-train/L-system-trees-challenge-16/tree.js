// go to /node_modules and get p5.js
import p5ctx from 'p5';

var axiom = "F"
var sentence = axiom;
var rules = []
rules[0] = {
  // rule to match
  a: "F",
  // to replace with
  b: "FF+[+F-F-F]-[-F+F+F]"
}

var len = 100;
var angle;

function generate() {
  len*=0.5;
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
  turtle()
}

// LOGO style drawing
function turtle() {

  p5.background(51)

  // not needed, 
  // p5.resetMatrix();

  p5.translate(p5.width/2, p5.height)
  p5.stroke(255)

  for (let i = 0; i < sentence.length; i++) {
    const current = sentence.charAt(i);

    if(current=="F"){
      // start from bottom drawing upwards
      p5.line(0,0,0,-len)
      // move drawing position
      p5.translate(0,-len)

    } else if( current=="+") {
      p5.rotate(angle)
    } else if( current=="-") {
      p5.rotate(-angle)
    } else if( current=="[") {
      p5.push()
    } else if( current=="]") {
      p5.pop()
    }
      
  }
}

// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  (p5) => {
    // all the processing goes here...
    p5.setup = ()=>{
      // only invoked once
      p5.createCanvas(400, 400)
      var alpha = 100
      p5.background(51, alpha)
      p5.createP(axiom)

      angle = p5.radians(25);

      turtle();
      
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
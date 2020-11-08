// go to /node_modules and get p5.js
import p5ctx from 'p5';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  (p5) => {
    // all the processing goes here...
    
    let ds;

    p5.setup = ()=> {
      p5.createCanvas(710, 400);
      ds = new PenroseLSystem();
      //please, play around with the following line
      ds.simulate(5);
    }

    p5.draw = ()=> {
      p5.background(0);
      ds.render();
    }
    
    // JS Object creation 
    function PenroseLSystem() {
        this.p5 = p5;
        this.steps = 0;
      //these are axiom and rules for the penrose rhombus l-system
      //a reference would be cool, but I couldn't find a good one
        this.axiom = "[X]++[X]++[X]++[X]++[X]";
        this.ruleW = "YF++ZF----XF[-YF----WF]++";
        this.ruleX = "+YF--ZF[---WF--XF]+";
        this.ruleY = "-WF++XF[+++YF++ZF]-";
        this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";

        //please play around with the following two lines
        this.startLength = 460.0;
        this.theta = this.p5.TWO_PI / 10.0; //36 degrees, try TWO_PI / 6.0, ...
        this.reset();
    }

    PenroseLSystem.prototype.simulate = function (gen) {
      while (this.getAge() < gen) {
        this.iterate(this.production);
      }
    }

    PenroseLSystem.prototype.reset = function () {
        this.production = this.axiom;
        this.drawLength = this.startLength;
        this.generations = 0;
      }

    PenroseLSystem.prototype.getAge = function () {
        return this.generations;
      }

    //apply substitution rules to create new iteration of production string
    PenroseLSystem.prototype.iterate = function() {
        let newProduction = "";

        for(let i=0; i < this.production.length; ++i) {
          let step = this.production.charAt(i);
          //if current character is 'W', replace current character
          //by corresponding rule
          if (step == 'W') {
            newProduction = newProduction + this.ruleW;
          }
          else if (step == 'X') {
            newProduction = newProduction + this.ruleX;
          }
          else if (step == 'Y') {
            newProduction = newProduction + this.ruleY;
          }
          else if (step == 'Z') {
            newProduction = newProduction + this.ruleZ;
          }
          else {
            //drop all 'F' characters, don't touch other
            //characters (i.e. '+', '-', '[', ']'
            if (step != 'F') {
              newProduction = newProduction + step;
            }
          }
        }

        this.drawLength = this.drawLength * 0.5;
        this.generations++;
        this.production = newProduction;
    }

    //convert production string to a turtle graphic
    PenroseLSystem.prototype.render = function () {
      this.p5.translate(this.p5.width / 2, this.p5.height / 2);

        this.steps += 20;
        if(this.steps > this.production.length) {
          this.steps = this.production.length;
        }

        for(let i=0; i<this.steps; ++i) {
          let step = this.production.charAt(i);

          //'W', 'X', 'Y', 'Z' symbols don't actually correspond to a turtle action
          if( step == 'F') {
            this.p5.stroke(255, 60);
            for(let j=0; j < this.repeats; j++) {
              this.p5.line(0, 0, 0, -this.drawLength);
              this.p5.noFill();
              this.p5.translate(0, -this.drawLength);
            }
            this.repeats = 1;
          }
          else if (step == '+') {
            p5.rotate(this.theta);
          }
          else if (step == '-') {
            p5.rotate(-this.theta);
          }
          else if (step == '[') {
            p5.push();
          }
          else if (step == ']') {
            p5.pop();
          }
        }
      }



  }
)


export default p5
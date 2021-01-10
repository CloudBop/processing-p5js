// go to /node_modules and get p5.js
import p5ctx from 'p5';
import Branch from './branch';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  (p5) => {
    // all the processing goes here...
    const tree=[];
    let root;
    
    p5.setup = ()=>{
      p5.createCanvas(window.innerWidth, window.innerHeight)
      p5.background(90,20,10)
      //
      const a = p5.createVector(p5.width/2, p5.height);
      const b = p5.createVector(p5.width/2, p5.height-100);
      root = new Branch(a,b, p5);

      tree[0] = root
    }
    // 
    p5.draw = ()=>{
      p5.background(90,20,10)

      for (let idx = 0; idx < tree.length; idx++) {
        tree[idx].show(p5);
      }
    }


    p5.mousePressed = ()=> {
      for (let idx = tree.length-1; idx>=0; idx--) {
        tree.push(tree[idx].branchRight(p5));
        tree.push(tree[idx].branchLeft(p5));        
        // tree[1] = tree[0].branchRight(p5)
        // tree[2] = tree[0].branchLeft(p5)
      }
      // 
      
    }

  }
)


export default p5
// go to /node_modules and get p5.js
import p5ctx from 'p5';
import Branch from './branch';
// create a new p5 instance. docs - https://p5js.org/reference/
const p5 =  new p5ctx(
  // now we can invoke p5 object|class|instance methods
  (p5) => {
    // arrays of Vectors
    const tree=[];
    const leaves=[];
    let root;
    let countGeneration=0
    
    p5.setup = ()=>{
      p5.createCanvas(window.innerWidth, window.innerHeight)
      p5.background(190,220,10)
      // starting point
      const a = p5.createVector(p5.width/2, p5.height);
      const b = p5.createVector(p5.width/2, p5.height-100);
      root = new Branch(a,b, p5);
      // array of branch objects
      tree[0] = root
    }
    // 
    p5.draw = ()=>{
      // p5.background(90,20,10)
      p5.background(0,0,0)

      for (let idx = 0; idx < tree.length; idx++) {
        tree[idx].show(p5);
        // animate!
        // tree[idx].jitter(p5);
      }

      for (let i = 0; i < leaves.length; i++) {
        const leaf = leaves[i];
        // rgba
        p5.fill(p5.random(0,255) ,p5.random(0,255),p5.random(0,255),100)
        p5.noStroke()
        p5.ellipse(leaf.x, leaf.y, 18, 18)
        
        // falling leaves!!!
        leaf.y+= p5.random(0,1)
      }
    }

    /**
     * Pre Bug Fix explaination - .finished
     * each click is rendering brand new tree over previous one
     */


    p5.mousePressed = ()=> {
      for (let idx = tree.length-1; idx>=0; idx--) {
        
        if(!tree[idx].finished){
          tree.push(tree[idx].branchRight(p5));
          tree.push(tree[idx].branchLeft(p5));          
        }
        tree[idx].finished = true;
      }
      //
      countGeneration++

      if(countGeneration%2===0){
        for (let i = 0; i < tree.length; i++) {     
          if(!tree[i].finished){
            // copy the vector
            const leaf = tree[i].end.copy()
            leaves.push(leaf)
          }
        }
      }
    }
  }
)


export default p5
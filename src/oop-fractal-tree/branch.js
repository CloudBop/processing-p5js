// constructor
import p5 from 'p5'
function Branch(begin, end){
  this.begin = begin
  this.end = end
  //
  this.show = function(p) {
    p.stroke(255)
    p.line(this.begin.x, this.begin.y, this.end.x, this.end.y)
  }

  this.branchRight = function(p) {
    // vector
    const dir= p5.Vector.sub(this.end, this.begin)
    // 45deg
    dir.rotate(p.PI/4)
    // shrink
    dir.mult(0.67)
    const newEnd = p5.Vector.add(this.end, dir);
    return new Branch(this.end, newEnd)
  }

  this.branchLeft = function(p) {
    //
    const dir= p5.Vector.sub(this.end, this.begin)
    // 45deg
    dir.rotate(-p.PI/4)
    // shrink by 1/3
    dir.mult(0.67)
    const newEnd = p5.Vector.add(this.end, dir);

    return new Branch(this.end, newEnd)
  }
}

export default Branch
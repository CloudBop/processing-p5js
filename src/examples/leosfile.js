import p5ctx from "p5"

const p5 = new p5ctx (
    // https://p5js.org/reference/
    (p5)=>{
      ///////////////////////////
      const fillColor;
      const square = 300
      p5.setup=()=>{
            p5.createCanvas(square,square)
            p5.background("#837655")
            const p={
            x1:0,
            y1:0,
            x2:0,
            y2:square/2,
            x3:square/2,
            y3:square/2,

            }
            p5.triangle(p.x1,p.y1,p.x2,p.y2,p.x3,p.y3)

            // triangle(30, 75, 58, 20, 86, 75);
        }
        //
        let move=0
        p5.draw=()=>{          
          const p={
            x1:move,
            y1:move,
            x2:move,
            y2:(square/2),
            x3:(square/2),
            y3:(square/2),

            }
            p5.frameCount=60


            // increment the red value
      fillColor.levels[0] += colorValueIncrease;
      // If the red value is maxed out increment the green value
      // and reset the red value.
      if (fillColor.levels[0] > 255) {
        fillColor.levels[0] = 0;
        fillColor.levels[1] += colorValueIncrease;
      }
      // If the green value is maxed out increment the blue value
      // and reset the green value.
      if (fillColor.levels[1] > 255) {
        fillColor.levels[1] = 0;
        fillColor.levels[2] += colorValueIncrease;
      }
      // If the blue value is maxed out reset the green value.
      if (fillColor.levels[2] > 255) {
        fillColor.levels[2] = 0;
      }

            p5.background("#837655")
            p5.triangle(p.x1,p.y1,p.x2,p.y2,p.x3,p.y3)
            move++ 
            if( move % square === 0 ) move =0; 

        }   

      ///////////////////////////
    }
)
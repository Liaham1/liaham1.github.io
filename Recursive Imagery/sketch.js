// Project Title
// Your Name
// Date
//
// Extra for Exper    ts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(220);
  // circle(width/2, height /2, width)
  // consentric(width/2,height/2,width);
  circleFractal(width/2,height/2, width/2);
}
 
// function consentric(x,y,d) {
//   circle(x,y,d);
//   if (d > 10) {
   
//     consentric(x,y,d/1.2);
//   }
// }
function circleFractal(x,y,d) {
  circle(x,y,d);
  if (d>1) {
   
    circleFractal(x-d/2,y,d/2);
    circleFractal(x+d/2,y,d/2);
    circleFractal(x,y + d /2,d/2);
    
    
  }
}
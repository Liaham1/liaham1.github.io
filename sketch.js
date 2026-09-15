// Project Title
// Your Name
// Date





function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230);

  // Draw the loaded image at the mouse position
  let mouseInfo = mouseIsPressed + "" + mouseButton.left + "" + mouseButton.right + "";
  text(mouseInfo, mouseX, mouseY);

  // Draw text at the same position
  textSize(32);
  fill(0);
  text("YO EL TEACH", mouseX, mouseY - 10);
  function keyPressed(){
    print(key);

  }
}
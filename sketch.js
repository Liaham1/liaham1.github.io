// Mouse, Text, Scope
// Mr. Scott
// Sept 15, 2026

// Global Variables
let x = 100;  let y = 100;
let c = "green";
async function preload() {
  let img = loadImage('lightning-dog-lightning-god.gif');
}
async function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220); 
  textSize(40);    
  image(img, mouseX, mouseY , 100,100);
  //mouse-related system variables (managed by library)
  
  let mouseInfo = mouseIsPressed + " "
                  + mouseButton.left + " "
                  + mouseButton.center + " "
                  + mouseButton.right;
  text(mouseInfo, mouseX, mouseY);
  
  drawSquare();
}

function drawSquare(){
  //draw our character (a square) on screen
  fill(c);
  square(x,y,50);
}

function keyPressed(){
  //this function calls automatically
  // - for single press captures
  print(key + " " + keyCode);
  if (key=== "a") {
    c = "red";
  }
  // for interest's sake → 
  // [ALT] - 2 to 4 digit number
  // – →←↓↑ unicode
}

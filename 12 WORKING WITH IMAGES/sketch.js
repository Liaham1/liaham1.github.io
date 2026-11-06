// Images
// Liam
// October 30, 2026

let lionL, lionR;
let dir = "left";
let pinImages = [];
let pinIndex = 0;
async function loadAssets() {
  // lion images 
  goku = await loadImage("assets/OIP (1).webp");
  lionL = await loadImage("assets/lion-left.png");
  lionL = await loadImage("assets/is-screaming-lion-vs-monkey-with-hand-even-close-v0-uplp3i6m5uae1.webp");
  //pin wheel images

  imageMode(CENTER);
  for (let i = 0; i < 8; i++) {
    pinImages.push(await loadImage("assets/pin-0" + i + ".png"));
  }

}
function drawPin() {
  if (pinImages[pinIndex]) {
    image(pinImages[pinIndex], width / 2, height * 0.75);
  }

  pinIndex++;

  if (pinIndex >= pinImages.length) {
    pinIndex = 0;
  }
}
async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets(); // wait here until loading is done

}
// function drawLion() {
//   if(movedX < 0) {
//     dir = "right";
//   }
//   else if(movedX > 0) {
//     dir = "left";
//   }
// }
function draw() {
  background(220);
  drawPin();
  image(lionL,mouseX,mouseY,mouseX,mouseY);
  // switch(dir) {
  //   case "left":
  //     image(lionL,mouseX, mouseY, lionL.width / 2, lionL.height /2);

  //   break;

  // case  "right": {
  //     image(lionR,mouseX, mouseY, lionR.width / 2, lionR.height /2);
  //     break;
  // }
  // }
}

// Image Manip Demo
// Mr. Scott
// Nov 10, 2026

let pilot, chip;

async function loadAssets() {
  pilot = await loadImage("/assets/aviator.png");
  chip = await loadImage("/assets/chip.jpg");
}

async function setup() {
  await loadAssets();
  createCanvas(pilot.width, pilot.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(pilot, 0, 0);
  loadPixels(); //loads all pixels on Canvas

  // between loadPixels() and updatePixels()
  // run some code to modify pixels array
  boost();
  // to update the screen to reflect new pixels[]
  // call updatePixels()
  updatePixels();
}

function boost() {
  // brightening filter
  // "dumb" filter - same effect to each pixel
  // can use a single loop
  let boostAmount = map(mouseX, 0, width, -50,50);
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i] + boostAmount;
    let g = pixels[i + 1] + boostAmount;
    let b = pixels[i + 2] + boostAmount;
    setPixelOneD(i,r,g,b);
  }
}

// Helper Functions
function setPixelOneD(pos, r, g, b) {
  //pos → 1D location of pixel's red component
  //r,g,b → new color values (0-255) for that pixel
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}


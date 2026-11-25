// Image exercises 
// Liam
// Nov 17 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let hand, chip, nuit, race;

async function loadAssets() {
  race = await loadImage("/assets/race.jpg");
  chip = await loadImage("/assets/chip.jpg");
  hand = await loadImage("/assets/hand.jpg");
  nuit = await loadImage("/assets/nuit.jpg");
}

async function setup() {
  await loadAssets();
  createCanvas(400, 400);
  pixelDensity(1);

  image(chip, 0, 0, width, height);
  image(race, 0, 0, width, height);
  image(nuit, 0, 0, width, height);
  image(hand, 0, 0, width, height);
  loadPixels();
}
 
function majoritycolour() {
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];

    setPixelOneD(i, r, g, b);
  }

  updatePixels();
}
function gethalf() {
  for (let y = 0; y < height; y++) {
    for (let x = width / 2; x < width; x++) {

      let i = (y * width + x) * 4;

      let r = pixels[i];
      let g = pixels[i + 1];
      let b = pixels[i + 2];

      setgreenzero(i, r, g, b);
    }
  }

  updatePixels();
}

function setgreenzero(pos, r, g, b) {
  pixels[pos] = r;
  pixels[pos + 1] = 0;
  pixels[pos + 2] = b;
}
function setPixelOneD(pos, r, g, b) {
  let biggest = Math.max(r, g, b);

  if (biggest === r) {
    pixels[pos] = 255;
    pixels[pos + 1] = 0;
    pixels[pos + 2] = 0;
  }
  else if (biggest === g) {
    pixels[pos] = 0;
    pixels[pos + 1] = 255;
    pixels[pos + 2] = 0;
  }
  else if (biggest === b) {
    pixels[pos] = 0;
    pixels[pos + 1] = 0;
    pixels[pos + 2] = 255;
  }
}
function averageImage() {
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];

    getavgvalue(i, r, g, b);
  }

  updatePixels();
}
function getpixels() {
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];

 
  }

  updatePixels();
}
function invert() {
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width / 2; x++) {

      // Find the matching pixel on the right side
      let mirrorX = width - 1 - x;
      let mirrorI = (y * width + mirrorX) * 4;

      let i = (y * width + x) * 4;

      let r = pixels[mirrorI];
      let g = pixels[mirrorI + 1];
      let b = pixels[mirrorI + 2];

      pixels[i] = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
    }
  }

  updatePixels();
}
function getavgvalue(i, r, g, b) {
  let average = (r + b + g) / 3;

  if (average > 205) {
    r = 170;
    g = 230;
    b = 220;
  }
  else if (average > 155) {
    r = 105;
    g = 150;
    b = 210;
  }
  else if (average > 105) {
    r = 120;
    g = 180;
    b = 60;
  }
  else if (average > 55) {
    r = 130;
    g = 30;
    b = 130;
  }
  else {
    r = 90;
    g = 10;
    b = 50;
  }

  pixels[i] = r;
  pixels[i + 1] = g;
  pixels[i + 2] = b;
}
function draw() {
  background(220);
  // majoritycolour();
  // gethalf();
  // averageImage();
  getpixels();
  invert();
}

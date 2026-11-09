let count = 0;
let sorc = 0;
let num = 0;
let time = 0;
let grid = [
  [0, 255, 0, 255, 0, 255],
  [255, 0, 255, 0, 255, 0],
  [0, 255, 0, 255, 0, 255],
  [255, 255, 255, 255, 255, 255],
  [0, 0, 0, 0, 0, 0],
];
let won;
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 300 / rows;

function randomize() {

  for (let i = 0; i < 5; i++) {
    for (let e = 0; e < 6; e++) {

      wob = round(random(0, 1));

      if (wob === 0) {
        grid[i][e] = 255;
      }
      else {
        grid[i][e] = 0;
      }

    }
  }
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  randomize();



}
function highlight(y, x) {

  fill(0, 255, 0, 100);


  if (sorc === 0) {
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
    if (x - 1 >= 0)
      rect((x - 1) * tileSize, y * tileSize, tileSize, tileSize);

    if (x + 1 < cols)
      rect((x + 1) * tileSize, y * tileSize, tileSize, tileSize);

    if (y - 1 >= 0)
      rect(x * tileSize, (y - 1) * tileSize, tileSize, tileSize);

    if (y + 1 < rows)
      rect(x * tileSize, (y + 1) * tileSize, tileSize, tileSize);

  }
  else if (sorc === 1) {
    rect(x * tileSize, y * tileSize, tileSize, tileSize);
    rect((x + 1) * tileSize, y * tileSize, tileSize, tileSize);
    rect((x + 1) * tileSize, (y + 1) * tileSize, tileSize, tileSize);
    rect(x * tileSize, (y + 1) * tileSize, tileSize, tileSize);
  }

}
function keyPressed() {
  if (keyCode === 32) {

    if (sorc === 0) {
      sorc = 1;
    }
    else if (sorc === 1) {
      sorc = 0;
    }
  }
}
function draw() {
  background(220);
  renderGrid();
  getCurrentX();
  getCurrentY();
  text("Clicks: " + num, 400, 200);


  let x = getCurrentX();
  let y = getCurrentY();

  text("time: " + time, 400, 100);
  highlight(y, x);

  // Your win condition goes here


  won = true; // Reset every frame

  let firstColor = grid[0][0];

  for (let i = 0; i < rows; i++) {
    for (let e = 0; e < cols; e++) {
      if (grid[i][e] !== firstColor) {
        won = false;
      }
    }
  }
  if (!won) {
    time = round(millis() / 1000);
    time = round(millis() / 1000);
  }

  if (won) {
    fill("blue");
    textSize(40);
    time = time;

    text("You Win!", 100, 100);
  }
}
function mousePressed() {
  if (mouseX < width && mouseY < height) {
    let x = getCurrentX();
    let y = getCurrentY();

    if (keyIsDown(SHIFT)) {
      flip(x, y);

    }
    else {
      flip(x, y);

      num++;
      if (sorc === 0) {
        if (x - 1 >= 0) flip(x - 1, y);
        if (y - 1 >= 0) flip(x, y - 1);
        if (x + 1 <= 5) flip(x + 1, y);
        if (y + 1 <= 4) flip(x, y + 1);
      }
      else if (sorc === 1) {
        if (x + 1 >= 0) flip(x + 1, y);
        if (x + 1 >= 0) flip(x + 1, y + 1);
        if (x >= 0) flip(x, y + 1);
      }

    }
  }
}
function getCurrentX() {

  let constrainedX = constrain(mouseX, 0, width - 1);
  return int(constrainedX / tileSize);
}
function getCurrentY() {

  let constrainedY = constrain(mouseY, 0, height - 1);
  return int(constrainedY / tileSize);
}

function flip(x, y) {

  if (grid[y][x] === 255) grid[y][x] = 0;
  else grid[y][x] = 255;
}

function renderGrid() {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      fill(grid[x][y]);
      rect(y * tileSize, x * tileSize, tileSize, tileSize);
    }
  }
}
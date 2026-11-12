let count = 0;
let sorc = 0;
let num = 0;
let time = 0;
let fade = 0;
let animationMode = false;
let heatmap = [];
let animations = [];
let grid = [
  [0, 255, 0, 255, 0, 255],
  [255, 0, 255, 0, 255, 0],
  [0, 255, 0, 255, 0, 255],
  [255, 255, 255, 255, 255, 255],
  [0, 0, 0, 0, 0, 0],
];
let moveHistory = [];
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
  for (let y = 0; y < rows; y++) {
    heatmap[y] = [];

    for (let x = 0; x < cols; x++) {
      heatmap[y][x] = 0;
    }
  }


}
function getMoveHistory(amount) {
  let move;

  move = moveHistory[moveHistory.length - amount];


  return move;
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
function animation(x, y) {

  if (x >= 0 && x < cols && y >= 0 && y < rows) {

    let oldColor = grid[y][x];

    flip(x, y);

    animations.push({
      x: x,
      y: y,
      color: oldColor,
      alpha: 255
    });

  }
  heatmap[y][x]++;
}
function updateAnimations() {

  for (let i = animations.length - 1; i >= 0; i--) {

    let a = animations[i];

    fill(a.color, a.alpha);
    rect(a.x * tileSize, a.y * tileSize, tileSize, tileSize);

    a.alpha -= 8;

    if (a.alpha <= 0) {
      animations.splice(i, 1);
    }

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
  if (keyIsDown(CONTROL) && key === 'z') {
    if (moveHistory.length > 0) {
      grid = moveHistory.pop();
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
  updateAnimations();
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
  if (animationMode) {
    fill(0, fade);
    rect(animX * tileSize, animY * tileSize, tileSize, tileSize);

    fade -= 3;

    if (fade <= 0) {
      fade = 0;
      animationMode = false;
    }
  }
}
function mousePressed() {

  if (mouseX < cols * tileSize && mouseY < rows * tileSize) {

    let x = getCurrentX();
    let y = getCurrentY();

    // Save history BEFORE changing the grid
    moveHistory.push(grid.map(row => [...row]));

    if (keyIsDown(SHIFT)) {
      animation(x, y);
    }
    else {

      num++;

      if (sorc === 0) {

        animation(x, y);

        if (x - 1 >= 0) animation(x - 1, y);
        if (y - 1 >= 0) animation(x, y - 1);
        if (x + 1 < cols) animation(x + 1, y);
        if (y + 1 < rows) animation(x, y + 1);

      }

      else if (sorc === 1) {

        animation(x, y);
        animation(x + 1, y);
        animation(x + 1, y + 1);
        animation(x, y + 1);

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

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {

      fill(grid[y][x]);

      let heat = heatmap[y][x];

      if (heat === 0) {
        stroke(0);
      }
      else if (heat < 3) {
        stroke(0, 0, 255);
      }
      else if (heat < 6) {
        stroke(255, 150, 0);
      }
      else {
        stroke(255, 0, 0);
      }

      strokeWeight(3);

      rect(x * tileSize, y * tileSize, tileSize, tileSize);
    }
  }

  strokeWeight(1);
}
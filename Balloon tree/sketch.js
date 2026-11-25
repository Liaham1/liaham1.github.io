let scale = 15;
let leafpos;
let branchAngle = 18;
let branchCount = 0;
let seed;
let thickness;
function setup() {
  createCanvas(500, 500);
  background(255);
  seed = random(100000);
}

function draw() {
  background(255);
  randomSeed(seed);
  branchAngle = map(mouseX, 0, width, 5, 20);
  thickness = map(branchCount,0,1, 1, 4);
  drawTree(width/2, height* 0.9, 90, 6);
}
function drawLine(x1, y1, x2, y2, depth) {
  strokeWeight(map(depth, 1, 6, 1, 8));
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle)) * depth * scale);
    let y2 = y1 - (sin(radians(angle)) * depth * scale);

    drawLine(x1, y1, x2, y2, depth);

    drawLeaf(
      x2 + round(random(0, depth)),
      y2 + round(random(0, depth)),
      round(random(20)),
      color(random(255), random(255), random(255))
    );

    // Left branch
    drawTree(x2, y2, angle - branchAngle, depth - 1);

    // Right branch
    drawTree(x2, y2, angle + branchAngle, depth - 1);

    // Middle branch
    drawTree(x2, y2, angle, depth - 1);
  }
}
function drawLeaf(x,y,d,color) {

  fill(color);
  circle(x,y,d);

}
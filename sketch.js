// Interactive Scene
// Liam
// Sept 22, 2026

// Global Variables
let c = [0, 255, 0];
let currentBack = 0;

async function setup() {
  createCanvas(1700, 1080);
  background(50);
}

function createsplash() {
  fill("white");
  noStroke();

  ellipse(mouseX - 60, mouseY, 20, 8);
  ellipse(mouseX - 45, mouseY - 20, 12, 7);
  ellipse(mouseX - 30, mouseY - 35, 10, 15);
  ellipse(mouseX - 10, mouseY - 50, 8, 18);
  ellipse(mouseX + 10, mouseY - 55, 8, 20);
  ellipse(mouseX + 30, mouseY - 35, 10, 15);
  ellipse(mouseX + 45, mouseY - 20, 12, 7);
  ellipse(mouseX + 60, mouseY, 20, 8);

  circle(mouseX - 40, mouseY - 70, 12);
  circle(mouseX, mouseY - 90, 15);
  circle(mouseX + 40, mouseY - 70, 12);

  circle(mouseX - 75, mouseY - 30, 7);
  circle(mouseX - 65, mouseY - 65, 6);
  circle(mouseX + 75, mouseY - 30, 7);
  circle(mouseX + 65, mouseY - 65, 6);

  noFill();
  stroke("white");
  strokeWeight(5);
  arc(mouseX, mouseY + 5, 180, 50, 0, PI);
  arc(mouseX, mouseY + 10, 250, 70, 0, PI);
}

function burn() {
  fill("red");
  noStroke();
  triangle(mouseX, mouseY - 60, mouseX - 30, mouseY + 30, mouseX + 30, mouseY + 30);

  fill("orange");
  triangle(mouseX, mouseY - 40, mouseX - 20, mouseY + 20, mouseX + 20, mouseY + 20);

  fill("yellow");
  triangle(mouseX, mouseY - 20, mouseX - 10, mouseY + 15, mouseX + 10, mouseY + 15);
}

// Random character color
function changecolor() {
  c = [
    random(0, 256),
    random(0, 256),
    random(0, 256)
  ];
}

function draw() {
  // 4-state background
  if (currentBack === 0) {
    background(8, 26, 76);
  } else if (currentBack === 1) {
    background(76, 8, 26);
  } else if (currentBack === 2) {
    background(26, 76, 8);
  } else if (currentBack === 3) {
    background(80, 50, 100);
  }

  textSize(40);
  noStroke();

  fill(color(253, 253, 160));
  circle(100, 100, 300);

  fill("skyblue");
  ellipse(600, 800, 2000, 300);

  fill("midnightblue");
  triangle(100, 700, 300, 300, 500, 700);
  triangle(200, 700, 400, 100, 600, 700);
  triangle(300, 700, 500, 300, 700, 700);
  triangle(400, 700, 600, 200, 800, 700);
  triangle(500, 700, 700, 200, 900, 700);
  triangle(600, 700, 800, 500, 1000, 700);
  triangle(700, 700, 900, 300, 1100, 700);
  triangle(800, 700, 1000, 200, 1200, 700);
  triangle(900, 700, 1100, 200, 1300, 700);

  // Character
  fill(c[0], c[1], c[2]);
  ellipse(mouseX, mouseY, 100, 50);

  fill("white");
  circle(mouseX - 20, mouseY, 20);

  fill("black");
  circle(mouseX - 20, mouseY, 10);

  fill("white");
  circle(mouseX + 20, mouseY, 20);

  fill("black");
  circle(mouseX + 20, mouseY, 10);

  text("LIAM", 1000, 1000);

  if (mouseY >= 650) {
    createsplash();
  }

  if (mouseX <= 200 && mouseY <= 200) {
    burn();
  }
}

// Middle mouse button changes the background
function mousePressed() {
  if (mouseButton.center) {
    currentBack = currentBack + 1;

    if (currentBack > 3) {
      currentBack = 0;
    }
  }
}

// Press E to change the character's color
function keyPressed() {
  if (key === 'e') {
    changecolor();
  }
}

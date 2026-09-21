// Mouse, Text, Scope
// Mr. Scott
// Sept 15, 2026

// Global Variables


async function setup() {
  // Load the image.
  
  
  createCanvas(1700, 1080);
  
  background(50);

 
  


 
}

function draw() {
  
  background(220); 
  background(color(8,26,76));
  textSize(40);    
  noStroke();
  fill(color(253,253,160));
  circle(100,100,300);
  fill("skyblue");

  ellipse(600,800, 2000, 300);
  fill("midnightblue");
  triangle(100,700,300,300,500,700);
  triangle(100 + 100,700,300 + 100,100,500 + 100,700);
  triangle(100 + 200,700,300 +200,300,500 + 200,700);
  triangle(100 + 300,700,300 + 300,200,500 + 300,700);
  triangle(100 + 400,700,300 +400,200,500 + 400,700);
  triangle(100,700,300,300,500,700);
  triangle(100 + 500,700,300 + 400,500,500 + 500,700);
  triangle(100 + 600,700,300 +600,300,500 + 600,700);
  triangle(100 + 700,700,300 + 300,200,500 + 300,700);
  triangle(100 + 800,700,300 +800,200,500 + 800,700);
  fill('green');
  ellipse(mouseX,mouseY,100,50);
  fill("white");
  circle(mouseX - 20,mouseY,20);
  fill("black");
  circle(mouseX - 20,mouseY,10);
  fill("white");
  circle(mouseX +20,mouseY,20);
  fill("black");
  circle(mouseX +20,mouseY,10);
  text("LIAM", 1000, 1000);
}



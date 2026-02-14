function setup() {
  createCanvas(400, 400);
  background(mouseY);
}

function draw() {
  background(0);
  
  noStroke(0);
  fill(mouseX)
  circle(mouseX, mouseY, 75)
  
}
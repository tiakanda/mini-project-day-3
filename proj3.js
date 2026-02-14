function setup() {
  createCanvas(400, 400);
  background(mouseY);
}

  function draw() {
  noStroke(0);
  fill(255, mouseX/mouseY)
  circle(mouseX, mouseY, 75)
  
}

function mousePressed(){
  background(0);
}
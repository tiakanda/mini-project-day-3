function setup() {
  createCanvas(400, 400);
  background(mouseY);
  fill(255, 10)
}
  function draw() {
  noStroke(0);
  circle(mouseX, mouseY, mouseX/2+50, mouseY/2+50)
    circle(mouseX - 200, mouseY + 200, mouseX/2+50, mouseY/2+50)
  
}

function mousePressed(){
  fill(mouseY/400*255+40, 255, mouseX/400*255+40, 10)
}


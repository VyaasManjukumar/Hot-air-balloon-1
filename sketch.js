
var balloon;
 var backgroundIMG;

function preload(){
backgroundIMG=loadImage("Hot Air ballon-01.png");
balloon=loadImage("Hot Air ballon-02.png");
}
  
function setup() {
  createCanvas(800,400);
  if(keyDown(LEFT ARROW)){
    balloon.x=balloon.x -10;
  }
  else if(keyDown(RIGHT ARROW)){
    balloon.x=balloon.x +10;
  }
  else if(keyDown(UP ARROW)){
    balloon.y=balloon.y +10;
  }
  else if(keyDown(DOWN ARROW)){
    balloon.y=balloon.y +10;
  }
}

function draw() {
  background(backgroundIMG);  
  drawSprites();
}
//var air
function setup() {
  createCanvas(1400,700);
  air=createSprite(200,200,10,100)
}

function draw() 
{
  background(0,125,141);
  air.shapeColor="red"
  drawSprites()
  if(keyDown('right')){
    air.x=air.x+2
  }
}





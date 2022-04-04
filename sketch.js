
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, background;
var rabbit
var carrot

function preload() {
  background = loadImage("./images/garden.gif")
  rabbitImg = loadImage("./images/rab.png")
  carrotImg = loadImage("/images/carrot.png")
}





function setup() {
  createCanvas(1800,800);

  engine = Engine.create();
  world = engine.world;

  rabbit = createSprite(50,50,50,50)

  
  
}


function draw() 
{
  
   image(background,0,0,width,height)

   image(rabbit,50,50,width,height)

    if (keyCode === UP_ARROW  ) {
      rabbit.velocityY=0.3
      rabbit.velocityX=0.5
    }

  Engine.update(engine);

  push();
  translate(rabbit.position.x, rabbit.position.y);
  rotate(rabbit.angle);
  imageMode(CENTER);
  image(rabbitImg, 0, 0, 160, 310);
  pop();
  
 carrotfall()



}

  


function carrotfall() {
  if(frameCount%120===0){
      
    carrot = createSprite(100,70,20,10)
    carrot.addImage(carrotImg)
    carrot.velocityY = 5
   

    carrot.scale = 0.2
    carrot.x = Math.round(random(100,400))
    
    
  }
}
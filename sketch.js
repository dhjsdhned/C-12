
var trex ,trex_running;
var groundImage, invisibleGround;

function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage=loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
 //this is to create a sprite
 trex=createSprite(50,160,20,50);
 //adding the animation which the trex is doing
 trex.addAnimation("running", trex_running); 
 //Decrease the size of the sprite
 trex.scale=0.5; 

 //Create the ground sprite
 ground=createSprite(200,180,400,20); 
 //adding the ground image
 ground.addImage("ground", groundImage);
 //adding this so that when we press space bar, it doesn't jump in the air more than once
 ground.velocityX=-4;
 ground.x=ground.width/2;

 //Create the invisible ground sprite
 invisibleGround=createSprite(200,190,400,10);
 //we make the ground invisible
 invisibleGround.visible=false;
}

function draw(){
  background("white")

  if(keyDown("space")&&trex.y>=100)  
  {
    //how the trex moves up
    trex.velocityY=-8;  
  }
  //how the trex comes back down
  trex.velocityY=trex.velocityY+0.5;

  //to make sure that the trex is shown standing on the ground
  if(ground.x<0)
  {
    ground.x=ground.width/2;
  }

  //how the trex jumps only from the invisible ground sprite
  trex.collide(invisibleGround); 
  drawSprites()
}

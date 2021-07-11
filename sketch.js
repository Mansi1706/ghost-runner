var tower,towerimg;
var door,doorimg,doorgroup;
var ghost,ghostimg;
var climber,climberimg,climbergroup;
var invisibleblock,invisibleblockgroup;
var gameState="play";


function preload(){
  towerimg=loadImage("tower.png");
   doorimg=loadImage("door.png");
   climberimg=loadImage("climber.png");
   ghostimg=loadImage("ghost-standing.png");
  spookysound=loadSound("spooky.wav");
  
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerimg);
  tower.velocityY=1;
  
  doorgroup=new Group();
  climbergroup=new Group();
  invisibleblockgroup=new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostimg);
  ghost.scale=0.3;
  
  
}

function draw(){
  background(0);
  spookysound.loop();
  
  
  if(gameState==="play"){
  if(tower.y>400){
     tower.y=300;
     }
  
  if(keyDown("left_arrow")){
     ghost.x=ghost.x-3;
    
     }
  
  if(keyDown("right_arrow")){
     ghost.x=ghost.x+3;
    
     }
  
  if(keyDown("space")){
     ghost.velocityY=-5;
     
     }
  ghost.velocityY=ghost.velocityY+0.8;   
  
  if(climbergroup.isTouching(ghost)){
     ghoost.velocityY=0;
    
     }
  
  if(invisibleblockgroup.isTouching(ghost) || ghost.y>600){
     ghost.destroy();
    gameState="end";
    
     }
  
  spawndoors();
  drawSprites();
  }
  
  if(gameState==="end"){
     stroke("yellow");
    fill("yellow");
    textSize(30);
    text("GAME OVER",230,250);
     }
}

function spawndoors(){
  if(frameCount % 240 === 0){
     door=createSprite(200,-50);
    door.addImage(doorimg);
    door.x=Math.round(random(120,400));
    door.velocityY=1;
    door.lifetime=800;
    doorgroup.add(door);
    
     climber=createSprite(200,10);
    climber.addImage(climberimg);
    climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=800;
    climbergroup.add(climber);
    
    invisibleblock=createSprite(200,15);
    invisibleblock.width=climber.width;
    invisibleblock.height=2;
    invisibleblock.debug=true;
    invisibleblock.x=door.x;
    invisibleblock.velocityY=1;
    invisibleblock.lifetime=800;
    invisibleblockgroup.add(invisibleblock);
    
    ghost.depth=door.depth;
    ghost.depth+=1
     }
}



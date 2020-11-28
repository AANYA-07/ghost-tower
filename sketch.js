var door,door1;
var tower,tower1;
var ghost,ghost1;
var climber,climber1;
var doorsgroup,climbergroups;
var invisibleblockgroup,invisibleblock;
var GameState="play";

function preload (){
  door1 = loadImage ("door.png");
  tower1= loadImage ("tower.png");
  ghost1 = loadImage ("ghost-standing.png");
  climber1 = loadImage ("climber.png");
 }

 function setup () {
   createCanvas(500,500);
   
   tower = createSprite (250,250,500,500);
   tower.addImage(tower1);
   tower.velocityY = 3;
   
   ghost = createSprite  (250,250,10,50);
   ghost.addImage(ghost1);
   ghost.scale = 0.3
   
   
   doorsgroup = new Group();
   climbergroup = new Group ();
   invisibleblockgroup = new Group ();
 }

function draw () {
  background ("red");
  
  if (GameState==="play") {
       //reset the tower
  if (tower.y>500){
     tower.y = 250;
  }
     if (keyDown("left") ){
     ghost.x = ghost.x-5
   }
  if (keyDown("right") ){
     ghost.x = ghost.x+5
   }
  
  if (keyDown("space") ){
     ghost.velocityY = -10;
   }
    //gravity
  ghost.velocityY = ghost.velocityY+0.5  
    
    spawndoors();
 if(climbergroup.isTouching(ghost)){
    ghost.velocityY=0;
    }
    
    drawSprites();
    
    if (invisibleblockgroup.isTouching (ghost) || ghost.y>500){
        GameState="end";
        }
      } else if(GameState==="end"){
    textSize (40);
    text ("GAME OVER",150,250);
  }
  
 

  

  
  
}
 
function spawndoors () {
  if (frameCount% 50 === 0) {
    door = createSprite (250,0);
    door.addImage (door1);
    door.velocityY = 5;
    door.lifetime = 100 ;
    door.x = Math.round(random(100,400));
    doorsgroup.add(door);
    climber = createSprite (250,60);
    climber.addImage (climber1);
    climber.velocityY = 5;
    climber.x = door.x;
    climbergroup.add(climber);
    climber.lifetime = 100 ;
    
    
    invisibleblock = createSprite (250,65);
    invisibleblock.velocityY = 5;
    invisibleblock.x= door.x;
    invisibleblock.visible = false;
    invisibleblockgroup.add(invisibleblock);
    invisibleblock.lifetime = 100 ;
    
  }
}
 
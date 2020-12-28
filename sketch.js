var Engine = Matter.Engine;
var  World = Matter.World;
var  Events = Matter.Events;
var  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

var particle = null;
var turn = 0;

var gameState = "play";
function setup() {
  createCanvas(700, 740);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 100) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width - 50; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width - 25; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width - 50; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width - 25; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   textSize(25);

   text("500",30,height-250);
   text("500",130,height-250);
   text("500",230,height-250);
   text("100",330,height-250);
   text("200",430,height-250);
   text("200",530,height-250);
   text("200",630,height-250);

  if(particle !== null){

    particle.display();

    if(particle.x < 300 && particle.y > 700){
      score = score + 500;
      particle = null;
    }
    if(particle.x > 300 && particle.x < 400 && particle.y > 700){
      score = score + 100;
      particle = null;
    }
    if(particle.x > 400 && particle.y > 700){
      score = score + 200;
      particle = null;
    }
  }

   if(turn > 4){
     gameState = "end";
     textSize(50)
     text("GAME OVER",width/2 - 140,230);
   }

}

function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particle = new Particle(mouseX,10,10);
  }
}
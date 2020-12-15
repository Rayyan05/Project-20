var car,wall;
var speed,weight;

function setup(){
  createCanvas(1600,400);


  car = createSprite(400,200,10,50);
  car.shapeColor = "blue";



  speed=random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

  wall = createSprite(1400,200,60,height/2);


  
}

function draw(){
  background(0,0,0);

  
 car.depth = wall.depth;
 car.depth++

  if(wall.x - car.x < car.width/2+wall.width/2)
   { 
  

   var deformation = 0.5*speed*weight*speed/22509

   if(deformation>180){
     car.shapeColor = "red"
   }

   if(deformation<180 && deformation>100){
     car.shapeColor = "yellow"
   }

   if(deformation<100){
     car.shapeColor = "green";
   }

   car.velocityX = 0;
  }

  drawSprites();
}
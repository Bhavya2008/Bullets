var bullet;
var wall;
var thickness;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  weight = random(30,52);
  speed = random(223,321);
  thickness = random(22,83);

  bullet = createSprite(200,200,60,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0,0,0);  
   
  if(hascollided(bullet,wall)){
   bullet.velocityX = 0;
   bullet.x = 1180;
   var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);

   if (damage>10){
    wall.shapeColor = color(255,0,0);
   }}

   if (damage<10){
       wall.shapeColor = color(0,255,0);
   }

  
     
  drawSprites();

}



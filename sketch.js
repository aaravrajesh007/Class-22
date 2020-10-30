const Engine=Matter.Engine;  //Namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
var ball;
var options={
  isStatic:true
}
var balloptions={
  restitution:0.5
}
function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();//world
  world=engine.world;
  ball=Bodies.circle(200,20,10,balloptions);
 ground=Bodies.rectangle(200,380,400,10,options);
World.add(world,ground);
World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  fill("yellow");
  ellipse(ball.position.x,ball.position.y,10,10);
}



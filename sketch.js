const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var object_opptions={
    isStatic:true
  }
  object=Bodies.rectangle(200,100,50,50,object_opptions);
  World.add(world,object);
  console.log(object)
  console.log(object.position.y)
  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);  
  
}
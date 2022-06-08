
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

let ball,ground

function setup()
{
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world 

  let ball_options = {
    restitution: 1.2
  }
  ball = Bodies.circle(100,15,20,ball_options)
  World.add(world,ball)

  let ground_options = {
    isStatic: true 
  }
  ground = Bodies.rectangle(200,300,400,10,ground_options)
  World.add(world,ground)

  console.log(ball)

}

function draw() 
{
  background(51);

  Engine.update(engine)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)
 
}


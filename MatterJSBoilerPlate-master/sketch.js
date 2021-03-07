
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);

  


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Ground = new ground(400,550,2300,10)
	stone = new Stone (200,200,100,100)
	rubber = new Rubber (250,250,100,40)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  Ground.display()
  stone.display()
  rubber.display()
  drawSprites();
 
}




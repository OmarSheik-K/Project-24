
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	plane = new Plane(600,height,1200,20)
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);
  
    rubber=new Rubber(600,450,70);
    hammer = new Hammer(10,100);
	sand = new Sand(400, 400, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  stone.display();
  plane.display();
 
  rubber.display();
  iron.display();
  hammer.display();
  
  sand.display();

  drawSprites();
 
}

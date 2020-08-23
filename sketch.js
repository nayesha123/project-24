var box1,box2,box3;
var floor,ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(20,670,10);
	floor = new Ground(width/2,675,width,20)

	box1= createSprite(580,575,200,20);
	box2= createSprite(490,515,20,100);
	box3= createSprite(670,515,20,100);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ball.display();
  floor.display();
  drawSprites();

}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy,launcher1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;


function setup() 
{
	createCanvas(3000, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,20);
  tree = new Tree(1100,680);

 mango1=new Mango(1200,200,30);
  mango2=new Mango(1170,230,30);
	mango3=new Mango(1050,160,30);
	mango4=new Mango(1100,170,30);
	mango5=new Mango(1000,180,30);
	mango6=new Mango(1100,330,30);
	mango7=new Mango(1000,330,30);
  mango8=new Mango(1100,250,40);
	mango9=new Mango(1200,270,40);
 mango10=new Mango(1250,300,40);
  
  ground = new Ground(0,680,4000,20);
	boy = new Boy(250,600);
	launcher1 = new launcher(stone.body,{x:160, y:500});

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("orange");

  fill("yellow");
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE", 100,50);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  launcher1.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);

  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased()
{
    launcher1.fly();
}
function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    launcher1.attach(stone.body);
  }
}
function detectCollision(lstone,lmango)
{
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r)
  {
    Matter.Body.setStatic(lmango.body, false);
  }

}

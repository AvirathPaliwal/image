
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 var ground;
 var paper;
 var bin1;
 function preload()
 {
	
 }

 function setup() {
	createCanvas(2000, 450);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(1000,height,2000,20)
	paper=new Paper(100,400,30,);
   
	bin1=new Bin(1850,430,200,20);
 }


 function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paper.display();
  bin1.display();
 }
 function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.p, paper.p.position , { x : 100 , y : -100 } ) ;
   
   }
   }



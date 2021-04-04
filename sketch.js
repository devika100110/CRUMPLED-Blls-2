
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// function preload()
// {
	
// }

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin=new Dustbin(1200,650);
	paper=new Paper(200,450,40);	
	ground=Bodies.rectangle(800,690,1600,20,{isStatic:true});
	World.add(world,ground);

	// var render=Render.create({
	// 	element:document.body,
	// 	engine:engine,
	// 	options : {
	// 		width:1200,
	// 		height:700,
	// 		wireframes:false

	// 	}
	// })


	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1600,20);
  dustbin.display();
  paper.display();
  drawSprites();

 
}
	function keyPressed(){
		if(keyCode=== UP_ARROW){
			Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

		}
	}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, boy, boyImg;
var stone;
var mango,mango2,mango3,mango4,mango5;

function preload(){
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(windowWidth/2, windowHeight-10, windowWidth, 20);
	tree = new Tree(windowWidth-250,windowHeight-315);

	boy = createSprite(400,windowHeight-135);
	boy.addImage(boyImg);
	boy.scale = 0.2;

	stone = new Stone(215,windowHeight-260);
	slingShot = new SlingShot(stone.body, {x:255,y:windowHeight-260})

	mango = new Mango(windowWidth-344,windowHeight-436);
	mango2 = new Mango(windowWidth-304,windowHeight-492);
	mango3 = new Mango(windowWidth-323,windowHeight-567);
	mango4 = new Mango(windowWidth-344,windowHeight-505);
	mango5 = new Mango(windowWidth-402,windowHeight-436);
	mango6 = new Mango(windowWidth-289,windowHeight-436);
	mango7 = new Mango(windowWidth-214,windowHeight-492);
	mango8 = new Mango(windowWidth-233,windowHeight-567);
	mango9 = new Mango(windowWidth-246,windowHeight-505);
	mango10 = new Mango(windowWidth-191,windowHeight-436);


	Engine.run(engine);
  
}


function draw() {
	background(234);

	ground.display();
	tree.display();
	stone.display();

	mango.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
  
	drawSprites();
 
}

function mouseDragged(){
	Matter.Body.stePosition(stone.body, {x: mouseX,y: mouseY});
}




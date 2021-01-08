var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var star_options;
var ground;
var choice;
var choice2;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 700);

	 fairyVoice.play();

choice=false;


	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;
	
	var ground_options={
		isStatic:true 
	  }
	  ground = Bodies.rectangle(400,700,800,10,ground_options);
	  World.add(world,ground);



	star_options={
			
		restitution:1,
		isStatic:false
	}
	starBody = Bodies.circle(650 , 100 , 20 , star_options);
	World.add(world, starBody);
	//starBody.
	
star.x=starBody.position.x;
star.y=starBody.position.y;

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  Engine.update(engine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20) ;

if(choice) {
	ellipseMode(RADIUS);
	  ellipse(starBody.position.x, starBody.position.y,20,star_options);
	  star.x=starBody.position.x;
	  star.y=starBody.position.y;
	  //console.log(star.x +"," + star.y);
}



keyPressed();

 drawSprites();

 

}

function keyPressed() {
	//write code here

	if(keyDown("right_arrow")){
		fairy.x=fairy.x+5;
	}

	if(keyDown("left_arrow")){
		fairy.x=fairy.x-5;
	}

	if(keyDown("down_arrow")){
		
choice=true;

	  
	}
}





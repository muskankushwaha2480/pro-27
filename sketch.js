const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(1000 ,800 );

  engine = Engine.create();
  world = engine.world;

  ground = createSprite(400,200,300,20)
  bob1 = new Bob(297,500,40,40);
  bob2 = new Bob(358,500,40,40);
  bob3 = new Bob(417,500,40,40);
  bob4 = new Bob(479,500,40,40);
  bob5 = new Bob(540,500,40,40);

  rope1 = new Rope(bob1.body, { x: 297 , y: 200});
  rope2 = new Rope(bob2.body, { x: 358 , y: 200});
  rope3 = new Rope(bob3.body, { x: 417 , y: 200});
  rope4 = new Rope(bob4.body, { x: 479 , y: 200});
  rope5 = new Rope(bob5.body, { x: 540 , y: 200});
  }

function draw() {
  background("white");  
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 // console.log(mouseY , mouseX);
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -20, y: -100 })
    
  }
  }
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground 
function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,570,70,70);
    box2 = new Box(700,570,70,70)
    ground = new Ground(400,580,800,20)
    Pig1 = new Pig(600,570)
    Log1 = new Log(600,540,280,PI/2)
    box3 = new Box(500,480,70,70);
    Pig2 = new Pig(600,480)
    Log2 = new Log(600,440,280,PI/2)
    box4 = new Box(700,480,70,70)
    box5 = new Box(600,420,70,70)
    Log3 = new Log(550,420,80,PI/7)
    Log4 = new Log(650,420,80,PI/-7)
    
}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    box3.display();
    box4.display();
    Log1.display();
    Pig2.display();
    Log2.display();
    box5.display();
    Log3.display();
    Log4.display();
}
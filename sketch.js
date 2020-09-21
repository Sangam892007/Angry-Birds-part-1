const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,560,50,50);
    pig1 = new Pig(550,560,50,50);
    box2 = new Box(600,560,50,50);
    log1 = new Log(550,540,170,PI/2);
    box3 = new Box(510,520,50,50);
    pig2 = new Pig(550,520,50,50);
    box4 = new Box(600,520,50,50);
    log2 = new Log(550,510,170,PI/2);
    box5 = new Box(550,490,50,50);
    log3 = new Log(540,470,100,PI/6);
    log4 = new Log(590,470,100,PI/-6);
    bird1 = new Bird(200,400);
    ground = new Ground(400,600,800,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    log3.display();
    box5.display();
    log4.display();
    bird1.display();
    ground.display();
}
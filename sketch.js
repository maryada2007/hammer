const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron,box1,box2,box3,box4,pin;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(900,height,1200,20)
    hammer = new Hammer(10,100);
    box1 = new Ball(600,200,10,10);
    iron = new Iron(670,40,20,20);
    pin = new Pin(520,20,70,70);
    box2 = new Ball(700,300,10,10);
    box3 = new Ball(630,350,10,10);
    box4 = new Ball(550,310,10,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    iron.display();
    pin.display();
}
function box(){
    if(hammer.x + box.x < hammer.width/2 + box.width/2
&& hammer. x -box.x < hammer.width/2 + box.width/2
&& hammer.y + box.y < hammer.heigth/2 + box.heigth/2
&& hammer.y - box.y < hammer.heigth/2+ box.height/2){

}

}
function pin(){
    if(hammer.x + pin.x < hammer.width/2 + pin.width/2
&& hammer. x -pin.x < hammer.width/2 + pin.width/2
&& hammer.y + pin.y < hammer.heigth/2 + pin.heigth/2
&& hammer.y - pin.y < hammer.heigth/2+ pin.height/2);
}
function iron(){
    if(hammer.x + iron.x < hammer.width/2 + iron.width/2
&& hammer. x -iron.x < hammer.width/2 + iron.width/2
&& hammer.y + iron.y < hammer.heigth/2 + iron.heigth/2
&& hammer.y - iron.y < hammer.heigth/2+ iron.height/2);
}

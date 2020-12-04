const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const point={x:250,y:350};

var engine, world;
var ground, platform1, platform2;
var hexegon;
var boxes1=[];
var boxes2=[];

function setup() {
  createCanvas(1400, 700);
  engine = Engine.create();
  world = engine.world

  ground1 = new Ground(700, 700, 1400, 20);
  hexagon = new Hexagon(300, 200, 50);
  launcher = new Launcher(hexagon.body, {x:250,y:300});

  createBoxPy(boxes1,530,300,50,4);
  createBoxPy(boxes2,1000,500,30,4);

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("white");
  
  ground1.display();
  hexagon.display();
  launcher.display();

  setDetectCollision(boxes1) 
  setDetectCollision(boxes2)

 displayPyBox(boxes1)
 displayPyBox(boxes2)
}

function mouseDragged() {
  Matter.Body.setPosition(hexagon.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  launcher.fly();
}

function detectCollision(b,h){
	bp=b.body.position;
	hp=h.body.position;

	d=dist(bp.x, bp.y, hp.x, hp.y);
	if(d<=b.w+h.r){
		Body.setStatic(b.body, false)
	}
}

function createBoxPy (ar,x,y,boxWidth,rows){

  var boxAddress = 0;
  var xPos = x;
  var yPos = y;

    for(pyRows=1; pyRows<=rows; pyRows++){
      var fillcols=["red", "orange", "yellow", "green", "blue"];
      var col = random(fillcols);
      var noBoxesInRow = pyRows*2-1;

      for(rowBoxes=1; rowBoxes<=noBoxesInRow; rowBoxes++){
        ar[boxAddress++]=new Box (xPos, yPos, boxWidth, col)
        xPos = xPos + boxWidth;
      }
      yPos = yPos + boxWidth;
      xPos = x - (pyRows*2)*boxWidth/2
    }
    ar[boxAddress]=new Ground (x,yPos-15,rows*2*boxWidth,15);
}

function displayPyBox(ar) {
  for (i=0; i<ar.length; i++){
    ar[i].display()
  }
}
function setDetectCollision(ar) {
  for (i=0; i<ar.length; i++){
    detectCollision(ar[i],hexagon);

  }
}
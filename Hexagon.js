class Hexagon{
    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution :1,
            friction:1,
            density:1
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("hexagon.png");
    this.body=Matter.Bodies.polygon(this.x, this.y, 6,this.r, options);
    World.add(world, this.body)
    }

        display(){
            var hexagonPos = this.body.position;
            imageMode(CENTER);
            strokeWeight(1);
            ellipse(0,0,this.r,this.r);
            image(this.image, hexagonPos.x, hexagonPos.y, this.r, this.r);
        }
}
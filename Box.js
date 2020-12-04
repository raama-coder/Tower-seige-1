class Box
{
    constructor(x,y,width,fillCol)
    {
        this.x=x
        this.y=y
        this.w=width
       this.col=fillCol


        var option={
            restitution: 0,
            friction:1,
            density:0.0000000000000000000000000000000000000000000000000000000000000000000000001,
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,width,width,option);
       
        World.add(world,this.body)
    }

display() {
  var boxPos=this.body.position
rectMode(CENTER) 
strokeWeight(1);
fill(this.col); 
rect(boxPos.x,boxPos.y,this.w,this.w)
}
}
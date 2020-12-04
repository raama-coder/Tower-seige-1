class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.launcher = Matter.Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
        var bodyA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }
    
    fly() {
    this.launcher.bodyA=null;
    }

    attach(hBody){
        this.launcher.bodyA=hBody;
    }
}
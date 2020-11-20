class Chain {

    constructor (BodyA,BodyB){
    var options = {
    bodyA : BodyA,
    bodyB : BodyB,
    stiffness : 0.04,
    length : 10
    }
    this.chain = constraint.create(options)
    World.add(world,this.chain)   
    } 
    display () {
    strokeWeight(4);    
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
    }  
    }
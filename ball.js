class Ball {
    constructor (x,y,radius){
       var options={
        'density':0.8,
        'friction': 0.8,
        'restitution':0.8
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        push ()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius)
        pop ()
        
    }
    
    }
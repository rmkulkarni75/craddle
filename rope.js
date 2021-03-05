class rope{
    constructor(body1,body2,o1,o2){
        this.o1=o1
        this.o2=o2
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.o1,y:this.o2},
            

        }
       this.rope=Constraint.create(options)
       
        
        World.add(world,this.rope)
    }
   
    display(){
       var pointA=this.rope.bodyA.position
       var pointB=this.rope.bodyB.position
       strokeWeight(4)
        var a1=pointA.x
        var a2=pointA.y
        var a3=pointB.x+this.o1       
         var a4=pointB.y+this.o2
         line(a1,a2,a3,a4)


        }
     
    }

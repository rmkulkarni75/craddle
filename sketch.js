const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var b1,b2,b3,b4,b5,r1,r2,r3,r4,r5,roof1
function setup(){
    createCanvas(1600,700)
    rectMode(CENTER)
    engine=Engine.create()
    world=engine.world
   
    roof1=new roof(width/2,height/4,width/7,20)
    d=40
    s1=width/2
    s2=height/4+500
    b1=new bob(s1-d*2,s2,d)
    b2= new bob(s1-d,s2,d)
    b3=new bob(s1,s2,d)
b4=new bob(s1+d,s2,d)
b5=new bob(s1+d*2,s2,d)
r1=new rope(b1.body,roof1.body,-d*2,0)
r2=new rope(b2.body,roof1.body,-d,0)
r3=new rope(b3.body,roof1.body,0,0)
r4=new rope(b4.body,roof1.body,+d,0)
r5=new rope(b5.body,roof1.body,+d*2,0)
Engine.run(engine) 

}
function draw() {
rectMode(CENTER)
background("red")
roof1.display()
b1.display()
b2.display()
    b3.display()
    b4.display()
    b5.display()
    r1.display()
    r2.display()
    r3.display()
    r4.display()
    r5.display()


}

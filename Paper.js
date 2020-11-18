class Paper{
 constructor(x,y,radius){
 var position={
 isStatic:false,
 restitution:0.3,
 friction:0.5,
 density:1.2
 }
 this.p=Bodies.circle(x,y,radius,position);
 this.image=loadImage("paper.png");
 World.add(world,this.p);
 this.r=radius;
    }
    display(){
        var pos=this.p.position
        
 ellipseMode(RADIUS)

 image(this.image,0,0);
 ellipse(pos.x,pos.y,this.r);
 
    }
}
class Bin{
    constructor(x,y,width,height){
      var position={
      isStatic:true    
      }
      this.bin=Bodies.rectangle(x,y,width,height,position)
      this.bin1=Bodies.rectangle(x-100,y-20,20,100,position)
      this.bin2=Bodies.rectangle(x+100,y-20,20,100,position);

      World.add(world,this.bin)
      World.add(world,this.bin1)
      World.add(world,this.bin2)

      this.w=width
      this.h=height
    }
    display(){
  var pos=this.bin.position;
  var pos1=this.bin1.position;
  var pos2=this.bin2.position;
  fill("blue");
  rectMode(CENTER);
  rect(pos.x,pos.y,this.w,this.h);
  rect(pos1.x,pos1.y,20,100);
  rect(pos2.x,pos2.y,20,100);
    }  
  }
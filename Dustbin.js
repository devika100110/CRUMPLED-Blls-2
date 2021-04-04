 class Dustbin{
     constructor(x,y){
         this.x=x;
         this.y=y;
         this.dustbinWidth=200;
         this.dustbinHeight=100;
         this.wallThickeness=20;
         this.angle=0;

         this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickeness,{isStatic:true});
         this.leftwallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickeness,this.dustbinHeight,{isStatic:true});
         Matter.Body.setAngle(this.leftwallBody,this.angle);
         
         
         this.rightwallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickeness,this.dustbinHeight,{isStatic:true});
         Matter.Body.setAngle(this.rightwallBody,-1*this.angle);
         World.add(world,this.bottomBody);
         World.add(world,this.leftwallBody);
         World.add(world,this.rightwallBody);
        }
         display(){
             var posB=this.bottomBody.position;
             var posL=this.leftwallBody.position;
             var posR=this.rightwallBody.position;

             push ();
             translate (posL.x,posL.y);
             angleMode (RADIANS);
             rotate (this.angle);
             rectMode (CENTER);
             fill (255);
             rect (0,0,this.wallThickeness,this.dustbinHeight);
             pop ();

             push ();
             translate (posR.x,posR.y);
             angleMode (RADIANS);
             rotate (-1*this.angle);
             rectMode (CENTER);
             fill (255);
             rect (0,0,this.wallThickeness,this.dustbinHeight);
             pop ();

             push ();
             translate (posB.x,posB.y);
             angleMode (RADIANS);
             //rotate (this.angle);
             rectMode (CENTER);
             fill (255);
             rect (0,0,this.dustbinWidth,this.wallThickeness);
             pop ();
         }
}
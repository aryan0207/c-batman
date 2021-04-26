class Umbrella{

    constructor(x,y){
   var options={
   isStatic:true
   }
   this.image=loadImage("walking_1.png");
   this.Umbrella=Bodies.circle(x,y,50,options);
   this.radius=50;
   World.add(world,this.Umbrella);
    }
    display(){
    var pos=this.Umbrella.position;
    imageMode(CENTER);
    this.image(this.image,pos.x,pos.y+70,300,300);
    }
}
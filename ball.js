class ball extends dustbin
{constructor(x,y){
  super(x,y,50,50);
  this.image = loadImage("sprites/paper.png")

  var options={
      isStatic:false,
      restitution:0.3,
      friction:0,
      density:1.2

  }
}
display(){
this.image(this.image,0,0,this.width,this.height);
super.display();
}
}
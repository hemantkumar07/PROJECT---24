class Rubber extends Baseclass {
    constructor(x, y,width,height) {
      super (x,y,width,height)
    };
    display(){
      super.display()
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      strokeWeight(4);
      stroke("blue");
      fill(255);
    };
  };
  
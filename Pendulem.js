class Bob {
    constructor(x,y,width,height,angle) {
      var options = {
         restitution: 2,
         friction:0.2,
        density: 1
      }
      this.body = Bodies.rectangle(x,y,40,40,options);
      this.width = width;
      this.height = height;
      this.angle = angle;
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x , pos.y);
      rotate(angle);
      stroke("white");
      fill("green")
      ellipse(0,0,60,60);
      pop();
    }
  }

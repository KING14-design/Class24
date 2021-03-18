class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      Matter.Body.setAngle(this.body,angle)
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      translate(pos.x,pos.y)
      rotate(this.body.angle)
  
      rectMode(CENTER);
      fill("red");
      stroke("blue")
      strokeWeight(3)
      rect(0,0,this.width, this.height);
      pop();
    }
  };
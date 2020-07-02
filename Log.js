class Log {
    constructor(x, y, height , angle) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 20, height, angle ,options);
      this.width = 20;
      this.height = height;
      //set the angle for the log to be placed, angle is in the radian, PI = 180 degrees, PI / 2 = 90
      Matter.Body.setAngle(this.body,angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
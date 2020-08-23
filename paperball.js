class Paper {
    constructor(x, y, radius) {
      var options = {
        'isStatic' : false,
        'restitution': 0.3,
        'friction' :0.5,
        'density' : 1.2
          
      }
      this.body = Bodies.circle(20,670,10,options);
      this.x = x;
      this.y = x;
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      fill("purple");
      ellipse(0,0,10,10);
    }
  };
  
class Ground {
    constructer(x,y,width,height) {
      var options = {
        'friction':0.3 
          
      }
      this.body = Bodies.rectangle(width/2,775,width,20,options);
World.add(World, this.body);
    }
    display(){
        fill("teal");
        rectMode(CENTER);
        rect(width/2,775,width,20)
    }
  };
class Sand {
    constructor(x, y, r) {
      var options = {
        'friction':5,
        'density':1,
        'restitution':1.3
    }
      this.body = Bodies.circle(x, y, (r-20)/2, options);
      this.x = x;
      this.y = y;
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
		var sandpos=this.body.position;		
		push();
		translate(sandpos.x, sandpos.y);
		rectMode(CENTER)
		strokeWeight(4);
		stroke("red");
		fill("brown");
		ellipse(0,0,this.r, this.r);
		pop();
    }
  };
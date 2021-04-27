class Iron {
    constructor(x, y){
        var options = {
            'friction': 3,
            'density': 30,
            'restitution': 0.8
        }
        this.body = Bodies.rectangle(x, y, 80, 50, options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
      }
}
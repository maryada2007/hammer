class Iron {
  constructor(x,y) {
    var options = {
      'density':4,
      'friction': 0.8,
      'restitution':0.8
    };
    this.body = Bodies.rectangle(x,y, 10, 40, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    

    

    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('red')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
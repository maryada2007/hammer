class Pin {
  constructor(x, y) {
    var options = {
      'density':0.8,
      'friction': 0.9,
      'restitution':0.9
    };
    this.body = Bodies.rectangle(x, y, 120, 20, options);
    this.width = 120;
    this.height = 20;
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    

    push();
    translate(pos.x, pos.y);
    
    strokeWeight(2);
    stroke('black')
    fill('yellow')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};
class Ball {
  constructor(x,y) {
    var options = {
      'density':0.8,
      'friction': 0.9,
      'restitution':0.7
    }
    this.body = Bodies.circle(x, y, 10, options);
    this.radius = 10;
   // this.height = 10;
    World.add(world, this.body);
  }
  

display(){
    var Ballpos = this.body.position;
    ellipseMode(RADIUS);
    push()
			translate(Ballpos.x, Ballpos.y);
			
			strokeWeight(4);
			stroke("pink");
			fill("white");
			//draw the ellipse here to display the rubber ball
     ellipse(0,0,this.radius,this.radius);
			pop();
    //var angle = this.body.angle
}
  };


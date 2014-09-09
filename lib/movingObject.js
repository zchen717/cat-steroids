(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color, game) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.game = game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
  
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0, 
      2 * Math.PI, 
      false
    );
    ctx.fill();
  };
  
  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };
  
  MovingObject.prototype.isCollidedWith = function(otherObject) {
    return (Math.abs(this.pos[0] - otherObject.pos[0])
    < (this.radius + otherObject.radius)) &&
    (Math.abs(this.pos[1] - otherObject.pos[1])
    < (this.radius + otherObject.radius));
  };
  
  MovingObject.prototype.collideWith = function (otherObject) {
    
  }
  
})();

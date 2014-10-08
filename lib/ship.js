(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var RADIUS = 15;
  var COLOR = "#FFFFFF";
  
  var Ship = Asteroids.Ship = function(game) {
    Asteroids.MovingObject.call(this, 
      game.randomPosition(), [0, 0], RADIUS, COLOR, game)
  };
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Ship);
  
  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };
  
  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };
  
  Ship.prototype.fireBullet = function() {
    var bullet = new Asteroids.Bullet(this.pos, this.vel, this.game);
    this.game.bullets.push(bullet);
  };
  
})();
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var RADIUS = 5;
  var COLOR = "#FFFFFF";
  
  var Bullet = Asteroids.Bullet = function (pos, vel, game) {
    posCopy = pos.slice();
    velCopy = vel.slice();
    Asteroids.MovingObject.call(this, posCopy, velCopy, RADIUS, COLOR, game);
    this.isWrappable = false;
  };
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Bullet);
  
  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

})();
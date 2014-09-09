(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var RADIUS = 5;
  var COLOR = "#550000";
  
  var Bullet = Asteroids.Bullet = function (pos, vel, game) {
    posCopy = pos.slice();
    velCopy = vel.slice()
    Asteroids.MovingObject.call(this, posCopy, velCopy, RADIUS, COLOR, game);
  };
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Bullet);
  
  Bullet.prototype.collideWith = function (otherObject) {
    console.log(otherObject instanceof Asteroids.Asteroid);
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

})();
(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var RADIUS = 10;
  var COLOR = "#FF0000";
  
  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    Asteroids.MovingObject.call(this, pos, Asteroids.Util.randomVector(10), 
      RADIUS, COLOR, game);
  };
  
  // debugger
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);
  
  Asteroid.prototype.collideWith = function (otherObject) {
    if(otherObject === this.game.ship) {
      this.game.ship.relocate();
    }
  };
})();
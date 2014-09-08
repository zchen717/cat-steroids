(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var RADIUS = 2;
  var COLOR = "#550000";
  
  var Bullet = Asteroids.Bullet = function (pos, vel, game) {
    Asteroids.MovingObject.call(this, pos, vel, RADIUS, COLOR, game);
  }
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Bullet);
})();
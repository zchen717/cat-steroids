(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };
  
  GameView.prototype.start = function() {
    var view = this;
    this.bindKeyHandlers();
    setInterval(function() {
      view.game.step();
      view.game.draw(view.ctx);
    }, 100); 
  };
  
  GameView.prototype.bindKeyHandlers = function () {
    var ship = this.game.ship;
    key('a', function() { ship.power([-5, 0]) });
    key('s', function() { ship.power([0, 5]) });
    key('w', function() { ship.power([0, -5]) });
    key('d', function() { ship.power([5, 0]) });
  };
})();
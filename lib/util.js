(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Util = Asteroids.Util = {};
  
  
  Util.inherits = function(parentClass, subClass) {
    function Surrogate () {};
    Surrogate.prototype = parentClass.prototype;
    subClass.prototype = new Surrogate();
  };
  
  Util.randomVector = function (length) {
    var x = Math.floor(Math.random() * length) - (length / 2);
    var y = Math.floor(Math.random() * length) - (length / 2);
    return [x, y];
  }
  
})();
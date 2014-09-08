(function () {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var DIM_X = 1000;
  var DIM_Y = 500;
  var NUM_ASTEROIDS = 10;
  
  var Game = Asteroids.Game = function() {
    this.x = DIM_X;
    this.y = DIM_Y;
    this.numAsteroids = NUM_ASTEROIDS;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this);
    this.bullets = [];
  };
  
  Game.prototype.add = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    } else if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    } else if (obj instanceof Asteroids.Ship) {
      this.ship = obj;
    }
  };
  
  Game.prototype.addAsteroids = function() {
    for(var i = 0; i < this.numAsteroids; i++) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(), this))
    }
  };
  
  Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship);
  }
  
  Game.prototype.randomPosition = function() {
    var x = Math.floor(Math.random() * DIM_X);
    var y = Math.floor(Math.random() * DIM_Y);
    return [x, y];
  };
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.x, this.y);
    
    // this.asteroids.forEach(function (asteroid) {
//       asteroid.draw(ctx);
//     })
    for(var i = 0; i < this.allObjects().length; i++) {
      if(this.allObjects()[i] !== null) {
        this.allObjects()[i].draw(ctx);
      }  
    }
  };
  
  Game.prototype.moveObjects = function () {
    // this.asteroids.forEach(function (asteroid) {
//       asteroid.move();
//     })
      for(var i = 0; i < this.allObjects().length; i++) {
        if(this.allObjects()[i] !== null) {
          this.allObjects()[i].move();
        }  
      }
  };
  
  Game.prototype.wrap = function (pos) {
    var new_pos_x = (pos[0] + DIM_X) % DIM_X;
    var new_pos_y = (pos[1] + DIM_Y) % DIM_Y;
    return [new_pos_x, new_pos_y];
  }
  
  Game.prototype.checkCollisions = function() {
    for(var i = 0; i < this.allObjects().length - 1; i++) {
      for(var j = i + 1; j < this.allObjects().length; j++){
        if(this.allObjects()[i] !== null && this.allObjects()[j] !== null) {
          if(this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
            this.allObjects()[i].collideWith(this.allObjects()[j]);
          } 
        }
      }
    }
  }
  
  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };
  
  Game.prototype.remove = function(asteroid) {
    //this.asteroids.splice(this.asteroids.indexOf(asteroid))
    this.asteroids[this.asteroids.indexOf(asteroid)] = null;
  }
  
  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids[this.asteroids.indexOf(obj)] = null;
    } else if (obj instanceof Asteroids.Bullet) {
      this.bullets[this.bullets.indexOf(obj)] = null;
    }
  };
  
})();
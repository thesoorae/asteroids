const MovingObject = require('./moving_object.js');
const Util = require('./util.js');


const randomVec = function (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
};

  const Asteroid = function(pos, game){

  // Scale the length of a vector by the given amount.
  let randomVel = randomVec(5);
  // let randomVel = [Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10))];
  let options = {color: Asteroid.COLOR, radius: Asteroid.RADIUS, pos: pos, vel: randomVel, game: game};
  MovingObject.call(this, options);
  };


Asteroid.COLOR = "green";
Asteroid.RADIUS = 10;
Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;

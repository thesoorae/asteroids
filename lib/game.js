const Asteroid = require('./asteroid.js');


const Game = function(){
  this.asteroids = [];
  this.addAsteroids();
};

Game.DIM_X = 800;
Game.DIM_Y = 800;
Game.NUM_ASTEROIDS = 50;

Game.prototype.addAsteroids = function(){
  for(let i=0; i < Game.NUM_ASTEROIDS; i++){
    const thisGame = this;
    this.asteroids.push( new Asteroid(Game.prototype.randomPosition(), thisGame));
  }
  return this.asteroids;
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach( function(asteroid){
  asteroid.draw(ctx);});
};


Game.prototype.moveObjects  = function(){
  this.asteroids.forEach(function(asteroid){
    asteroid.move();
  });};


Game.prototype.randomPosition = function(){
  return [Math.floor((Math.random() * Game.DIM_X)), Math.floor((Math.random() * Game.DIM_Y))];

};

Game.prototype.wrap = function(pos){
  return [((pos[0] % Game.DIM_X)), ((pos[1] % Game.DIM_Y))];
};

window.Game = Game;
module.exports = Game;

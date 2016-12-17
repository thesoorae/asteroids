const Game = require('./game.js');

function MovingObject(){}

function MovingObject(opts){
  // this.options = options;
  this.pos = opts.pos;
  this.vel = opts.vel;
  this.radius = opts.radius;
  this.color = opts.color;
  this.game = opts.game;
}

MovingObject.prototype.draw = function(ctx){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2*Math.PI,
    true
  );
  ctx.fill();
};
// MovingObject.prototype.draw = function (ctx) {
//   ctx.fillStyle = this.color;
//
//   ctx.beginPath();
//   ctx.arc(
//     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
//   );
//   ctx.fill();
// };


MovingObject.prototype.move = function(){
  let newPos = [this.pos[0] += this.vel[0], this.pos[1] += this.vel[1]];
  this.pos = this.game.wrap(newPos);
};

module.exports = MovingObject;

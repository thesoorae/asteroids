/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const GameView = __webpack_require__(1);



	document.addEventListener("DOMContentLoaded", function(){
	  const canvasElement = document.getElementById("game-canvas");
	  const ctx = canvasElement.getContext("2d");
	  const newGame = new GameView(ctx);
	  window.newGame = newGame;
	  window.ast = newGame.game.asteroids[5];
	  window.ctx = ctx;
	  newGame.start();

	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(2);

	const GameView = function(ctx){
	  this.game = new Game();
	  this.ctx = ctx;
	};

	GameView.prototype.start = function(){
	  const that = this;
	  setInterval(function(){
	    that.game.moveObjects();
	    that.game.draw(that.ctx);
	  }, 20);

	};

	module.exports = GameView;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const Asteroid = __webpack_require__(3);


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
	  pos[0] = pos[0]%Game.DIM_X;
	  pos[1] = pos[1]%Game.DIM_Y;
	};

	window.Game = Game;
	module.exports = Game;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const MovingObject = __webpack_require__(4);
	const Util = __webpack_require__(5);


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


/***/ },
/* 4 */
/***/ function(module, exports) {

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
	  this.pos[0] += this.vel[0];
	  this.pos[1] += this.vel[1];
	};

	module.exports = MovingObject;


/***/ },
/* 5 */
/***/ function(module, exports) {

	const Util = {
	  inherits (childClass, parentClass){
	    const Surrogate = function(){};
	    Surrogate.prototype = parentClass.prototype;
	    childClass.prototype = new Surrogate();
	  },
	    // childClass.constructor = childClass;
	    scale(vec, m) {
	    return [vec[0] * m, vec[1] * m];
	    }
	};



	module.exports = Util;


/***/ }
/******/ ]);
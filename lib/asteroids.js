const GameView = require('./game_view.js');



document.addEventListener("DOMContentLoaded", function(){
  const canvasElement = document.getElementById("game-canvas");
  const ctx = canvasElement.getContext("2d");
  const newGame = new GameView(ctx);
  window.newGame = newGame;
  window.ast = newGame.game.asteroids[5];
  window.ctx = ctx;
  newGame.start();

});

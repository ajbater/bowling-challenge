function Game() {
  this._frames = [];
  this._scores = [];
  this._totalScore = 0;
}

Game.prototype.takeTurn = function(firstRoll, secondRoll) {
  if (this._isGameOver()) {
    throw new Error('Game Over');
  }
  frame = new Frame(firstRoll, secondRoll);
  this._frames.push(frame);
};

Game.prototype._frameScore = function() {
  for (var i = 0; i < this._frames.length; i++) {
    this._scores.push(this._frames[i]._firstRoll + this._frames[i]._secondRoll);
  }
};

Game.prototype._addTotalScore = function() {
  for (var i = 0; i < this._scores.length; i++) {
    this._totalScore += this._scores[i];
  }
};

Game.prototype._isGameOver = function() {
  return this._frames.length === 10;
};

Game.prototype._resetGame = function() {
  this._frames = [];
  this._scores = [];
  this._totalScore = 0;
};

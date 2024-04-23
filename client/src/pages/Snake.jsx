import React from 'react';
      // <a href="http://127.0.0.1:5500/client/interactive-play/index.html">Link to game</a>/

const Game = () => {
  return (
    <div className="game-container">
      <iframe src="http://127.0.0.1:5501/client/interactive-play/index.html" height={1000} width={1000}></iframe>

    </div>
  );
};

export default Game;

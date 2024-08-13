import "./GameOverWindow.css";

function GameOverWindow({ gameWon, onRestart }) {
  const messageClass = gameWon ? "win-message" : "lose-message";
  const buttonClass = gameWon ? "win-button" : "lose-button";

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className={messageClass}>
          {gameWon ? "You Won!" : "Game Over..."}
        </h2>
        <button onClick={onRestart} className={buttonClass}>
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default GameOverWindow;

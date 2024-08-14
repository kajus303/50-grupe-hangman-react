import "./GameOverWindow.css";

function GameOverWindow({ gameWon, onRestart }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className={gameWon ? "win-message" : "lose-message"}>
          {gameWon ? "You Won!" : "Game Over..."}
        </h2>
        <button
          onClick={onRestart}
          className={gameWon ? "win-button" : "lose-button"}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default GameOverWindow;

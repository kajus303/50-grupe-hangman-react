import "./GameOverWindow.css";

function GameOverWindow({ gameWon, onRestart }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{gameWon ? "You Won!" : "Game Over..."}</h2>
        <button onClick={onRestart}>Restart Game</button>
      </div>
    </div>
  );
}

export default GameOverWindow;

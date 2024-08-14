import "./Keyboard.css";

function Keyboard({ letterClick, correctLetters, wrongGuesses, gameOver }) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => !gameOver && letterClick(letter)}
          className={`letter-button ${
            correctLetters.includes(letter)
              ? "correct"
              : wrongGuesses.includes(letter)
              ? "wrong"
              : ""
          }`}
          disabled={
            correctLetters.includes(letter) ||
            wrongGuesses.includes(letter) ||
            gameOver
          }
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;

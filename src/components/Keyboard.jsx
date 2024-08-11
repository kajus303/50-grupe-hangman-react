function Keyboard({ letterClick, correctLetters, wrongGuesses, gameOver }) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="keyboard">
      {letters.map((letter) => {
        const isCorrect = correctLetters.includes(letter);
        const isWrong = wrongGuesses.includes(letter);
        const buttonClass = isCorrect
          ? "letter-button correct"
          : isWrong
          ? "letter-button wrong"
          : "letter-button";

        return (
          <button
            key={letter}
            onClick={() => !gameOver && letterClick(letter)}
            className={buttonClass}
            disabled={isCorrect || isWrong || gameOver}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;

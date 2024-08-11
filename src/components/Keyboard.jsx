function Keyboard({ letterClick, correctLetters, wrongGuesses }) {
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
            onClick={() => letterClick(letter)}
            className={buttonClass}
            disabled={isCorrect || isWrong}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;

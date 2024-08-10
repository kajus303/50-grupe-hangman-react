function Keyboard({ letterClick }) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => letterClick(letter)}
          className="letter-button"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;

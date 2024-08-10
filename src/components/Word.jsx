function Word({ selectedWord, correctLetters }) {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, index) => (
        <span key={index} className="letter">
          {correctLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
}

export default Word;

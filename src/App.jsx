import { useState } from "react";
import Header from "./components/Header";
import Word from "./components/Word";
import Stickman from "./components/Stickman";
import Keyboard from "./components/Keyboard";

function App() {
  const [selectedWord] = useState("example");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleLetterClick = (letter) => {
    if (selectedWord.includes(letter)) {
      setCorrectLetters((currentLetters) => {
        const newCorrectLetters = [...correctLetters, letter];

        if (newCorrectLetters.length === new Set(selectedWord).size) {
          setGameWon(true);
          setGameOver(true);
        }

        return newCorrectLetters;
      });
    } else {
      setWrongGuesses(wrongGuesses + 1);

      if (wrongGuesses + 1 === 6) {
        setGameOver(true);
      }
    }
  };

  const handleRestart = () => {
    setCorrectLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setGameWon(false);
  };

  return (
    <div className="App">
      <Header />
      <Stickman wrongGuesses={wrongGuesses} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Keyboard letterClick={handleLetterClick} />
      {gameOver && (
        <div className="game-over">
          {gameWon ? <p>Victory!!!</p> : <p>Game Over...</p>}
          <button onClick={handleRestart}>Restart Game</button>
        </div>
      )}
    </div>
  );
}

export default App;

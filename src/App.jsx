import { useState, useEffect } from "react";
import Header from "./components/Header";
import Word from "./components/Word";
import Stickman from "./components/Stickman";
import Keyboard from "./components/Keyboard";

function App() {
  const [selectedWord] = useState("example");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleLetterClick = (letter) => {
    if (correctLetters.includes(letter) || wrongGuesses.includes(letter)) {
      return;
    }

    if (selectedWord.includes(letter)) {
      setCorrectLetters((currentLetters) => {
        const newCorrectLetters = [...currentLetters, letter];

        if (newCorrectLetters.length === new Set(selectedWord).size) {
          setGameWon(true);
          setGameOver(true);
        }

        return newCorrectLetters;
      });
    } else {
      setWrongGuesses((currentWrongGuesses) => {
        const newWrongGuesses = [...currentWrongGuesses, letter];

        if (newWrongGuesses.length === 6) {
          setGameOver(true);
        }

        return newWrongGuesses;
      });
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      const letter = event.key.toLowerCase();
      if (/^[a-z]$/.test(letter)) {
        handleLetterClick(letter);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [correctLetters, wrongGuesses, gameOver]);

  const handleRestart = () => {
    setCorrectLetters([]);
    setWrongGuesses([]);
    setGameOver(false);
    setGameWon(false);
  };

  return (
    <div className="App">
      <Header />
      <Stickman wrongGuesses={wrongGuesses.length} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Keyboard letterClick={handleLetterClick} />
      {gameOver && (
        <div className="game-over">
          {gameWon ? <p>You Won!</p> : <p>Game Over...</p>}
          <button onClick={handleRestart}>Restart Game</button>
        </div>
      )}
    </div>
  );
}

export default App;

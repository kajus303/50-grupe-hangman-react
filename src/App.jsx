import { useState, useEffect } from "react";
import Header from "./components/Header";
import Word from "./components/Word";
import Stickman from "./components/Stickman";
import Keyboard from "./components/Keyboard";
import GameOverWindow from "./components/GameOverWindow";

function App() {
  const [selectedWord] = useState("example");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  useEffect(() => {
    if (gameOver) {
      if (gameWon) {
        setWins((prevWins) => prevWins + 1);
      } else {
        setLosses((prevLosses) => prevLosses + 1);
      }
    }
  }, [gameOver, gameWon]);

  const handleLetterClick = (letter) => {
    if (
      correctLetters.includes(letter) ||
      wrongGuesses.includes(letter) ||
      gameOver
    ) {
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
      <div className="scoreboard">
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
      </div>
      <Stickman wrongGuesses={wrongGuesses} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Keyboard
        letterClick={handleLetterClick}
        correctLetters={correctLetters}
        wrongGuesses={wrongGuesses}
        gameOver={gameOver}
      />
      {gameOver && (
        <GameOverWindow gameWon={gameWon} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;

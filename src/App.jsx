import { useState, useEffect } from "react";
import Header from "./components/Header";
import Word from "./components/Word";
import Stickman from "./components/Stickman";
import Keyboard from "./components/Keyboard";
import GameOverWindow from "./components/GameOverWindow";

import "./App.css";

function App() {
  const [selectedWord] = useState("example");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [wins, setWins] = useState(
    () => parseInt(localStorage.getItem("wins")) || 0
  );
  const [losses, setLosses] = useState(
    () => parseInt(localStorage.getItem("losses")) || 0
  );
  const [scoreUpdated, setScoreUpdated] = useState(false);

  useEffect(() => {
    if (gameOver && !scoreUpdated) {
      if (gameWon) {
        const newWins = wins + 1;
        setWins(newWins);
        localStorage.setItem("wins", newWins);
      } else {
        const newLosses = losses + 1;
        setLosses(newLosses);
        localStorage.setItem("losses", newLosses);
      }
      setScoreUpdated(true);
    }
  }, [gameOver, gameWon, scoreUpdated, wins, losses]);

  const handleLetterClick = (letter) => {
    if (
      correctLetters.includes(letter) ||
      wrongGuesses.includes(letter) ||
      gameOver
    ) {
      return;
    }

    if (selectedWord.includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);

      if ([...correctLetters, letter].length === new Set(selectedWord).size) {
        setGameWon(true);
        setGameOver(true);
      }
    } else {
      setWrongGuesses([...wrongGuesses, letter]);

      if (wrongGuesses.length + 1 >= 6) {
        setGameOver(true);
      }
    }
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      const letter = event.key.toLowerCase();
      if (/^[a-z]$/.test(letter) && !gameOver) {
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
    setScoreUpdated(false);
  };

  const handleResetScores = () => {
    setWins(0);
    setLosses(0);
    localStorage.removeItem("wins");
    localStorage.removeItem("losses");
  };

  return (
    <div className="App">
      <Header />
      <div className="scoreboard">
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
        <button onClick={handleResetScores} className="reset-button">
          Reset Score
        </button>
      </div>
      <Stickman wrongGuesses={wrongGuesses.length} />
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

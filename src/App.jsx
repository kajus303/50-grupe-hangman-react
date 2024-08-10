import { useState } from "react";
import Header from "./components/Header";
import Word from "./components/Word";
import Stickman from "./components/Stickman";
import Keyboard from "./components/Keyboard";

function App() {
  const [selectedWord] = useState("example");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const handleLetterClick = (letter) => {
    if (selectedWord.includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);
    } else {
      setWrongGuesses(wrongGuesses + 1);
    }
  };
  return (
    <div className="App">
      <Header />
      <Stickman wrongGuesses={wrongGuesses} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      <Keyboard letterClick={handleLetterClick} />
    </div>
  );
}

export default App;

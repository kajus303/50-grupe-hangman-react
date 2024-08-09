import { useState } from "react";
import Header from "./components/Header";
import Word from "./components/Word";
import Stickman from "./components/Stickman";

function App() {
  const [selectedWord] = useState("example");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  return (
    <div className="App">
      <Header />
      <Stickman wrongGuesses={wrongGuesses} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
    </div>
  );
}

export default App;

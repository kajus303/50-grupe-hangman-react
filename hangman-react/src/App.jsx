import { useState } from "react";
import Header from "./components/Header";
import Word from "./components/Word";

function App() {
  const [selectedWord] = useState("example");
  const [correctLetters, setCorrectLetters] = useState([]);

  return (
    <div className="App">
      <Header />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
    </div>
  );
}

export default App;

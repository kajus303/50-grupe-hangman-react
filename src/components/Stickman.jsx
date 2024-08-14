import "./Stickman.css";
import gallows from "../assets/stickman-gallows.png";

function Stickman({ wrongGuesses }) {
  return (
    <div className="stickman-container">
      <img src={gallows} alt="Gallows" className="gallows" />
      <div className="stickman">
        {wrongGuesses > 0 && <div className="stickman-part head" />}
        {wrongGuesses > 1 && <div className="stickman-part body" />}
        {wrongGuesses > 2 && <div className="stickman-part arm-left" />}
        {wrongGuesses > 3 && <div className="stickman-part arm-right" />}
        {wrongGuesses > 4 && <div className="stickman-part leg-left" />}
        {wrongGuesses > 5 && <div className="stickman-part leg-right" />}
      </div>
    </div>
  );
}

export default Stickman;

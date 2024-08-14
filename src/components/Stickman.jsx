import "./Stickman.css";
import gallows from "../assets/stickman-gallows.png";

function Stickman({ wrongGuesses }) {
  const parts = [
    "head",
    "body",
    "arm-left",
    "arm-right",
    "leg-left",
    "leg-right",
  ];

  return (
    <div className="stickman-container">
      <img src={gallows} alt="Gallows" className="gallows" />
      <div className="stickman">
        {parts.slice(0, wrongGuesses.length).map((part, index) => (
          <div key={index} className={`stickman-part ${part}`} />
        ))}
      </div>
    </div>
  );
}

export default Stickman;

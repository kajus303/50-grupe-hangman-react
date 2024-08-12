import "./Stickman.css";
import gallows from "../assets/stickman-gallows.png";

function Stickman({ wrongGuesses }) {
  const parts = [
    { className: "head" },
    { className: "body" },
    { className: "arm-left" },
    { className: "arm-right" },
    { className: "leg-left" },
    { className: "leg-right" },
  ];

  return (
    <div className="stickman-container">
      <img src={gallows} alt="Gallows" className="gallows" />
      <div className="stickman">
        {parts.slice(0, wrongGuesses.length).map(({ className }, index) => (
          <div key={index} className={`stickman-part ${className}`} />
        ))}
      </div>
    </div>
  );
}

export default Stickman;

import head from "../assets/stickman-head.png";
import body from "../assets/stickman-body.png";
import armLeft from "../assets/stickman-arm-left.png";
import armRight from "../assets/stickman-arm-right.png";
import legLeft from "../assets/stickman-leg-left.png";
import legRight from "../assets/stickman-leg-right.png";
import "./Stickman.css";

function Stickman({ wrongGuesses }) {
  const images = [head, body, armLeft, armRight, legLeft, legRight];

  return (
    <div className="stickman">
      {images.slice(0, wrongGuesses.length).map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Stickman part ${index}`}
          className="stickman-part"
        />
      ))}
    </div>
  );
}

export default Stickman;

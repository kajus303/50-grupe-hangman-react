function Stickman({ wrongGuesses }) {
  const images = [
    "./assets/stickman-head.png",
    "./assets/stickman-body.png",
    "./assets/stickman-arm-left.png",
    "./assets/stickman-arm-right.png",
    "./assets/stickman-leg-left.png",
    "./assets/stickman-leg-right.png",
  ];

  return (
    <div className="stickman">
      <img src={images[wrongGuesses]} alt="Hangman" />
    </div>
  );
}

export default Stickman;

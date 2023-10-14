import React from "react";
import "./Dice.css";

// Composant pour afficher les dés
const Dice = ({ diceValues, clicked }) => {
  const [dice1, dice2, total] = diceValues;

  return (
    <div className="dice-container">
      <div className={`dice ${clicked ? "rolling" : ""}`}>
        {[dice1, dice2].map((dice, index) => (
          <div key={index} className={`dice-box ${clicked ? "clicked" : ""}`}>
            <img src={`images/dice${dice}.png`} alt={`Dice ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="dice-total">
        <h2>{total}</h2>
      </div>
    </div>
  );
};

export default Dice;

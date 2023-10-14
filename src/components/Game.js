import React, { useState } from "react";
import Dice from "./Dice";
import "./Game.css";

// Composant principal du jeu
const Game = () => {
  // État local pour les scores des joueurs, le joueur actuel, les valeurs des dés, et l'état du bouton "Lancer les dés"
  const [playerScores, setPlayerScores] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceValues, setDiceValues] = useState([1, 1, ""]);
  const [clicked, setClicked] = useState(false);

  // Fonction pour changer de joueur
  const switchPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 0 ? 1 : 0));
  };

  // Fonction pour mettre à jour le score
  const updateScore = (score) => {
    setPlayerScores((scores) => {
      const newScores = [...scores];
      newScores[currentPlayer] += score;
      return newScores;
    });
  };

  // Fonction pour lancer les dés
  const rollDice = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 100);

    const newValue1 = Math.floor(Math.random() * 6) + 1;
    const newValue2 = Math.floor(Math.random() * 6) + 1;

    const score = newValue1 + newValue2;
    setDiceValues([newValue1, newValue2, score]);

    updateScore(score);

    switchPlayer();
  };

  // Fonction pour réinitialiser le jeu
  const resetGame = () => {
    setDiceValues([1, 1, ""]);
    setPlayerScores([0, 0]);
    setCurrentPlayer(Math.floor(Math.random() * 2));
  };

  // Détermination du gagnant
  const winner = playerScores[0] > playerScores[1] ? 1 : 2;

  // Rendu du composant
  return (
    <div className="game-container">
      <h1>Game of Dice</h1>
      <Dice diceValues={diceValues} clicked={clicked} />
      <div className="scores">
        {playerScores.map((score, index) => (
          <div key={index}>
            <h2 className="score">
              Joueur {index + 1}: {score}
            </h2>
            <button
              className={`player-button ${
                currentPlayer === index ? "active" : "inactive"
              }`}
              onClick={rollDice}
              disabled={currentPlayer !== index}
            >
              Lancer les dés (Joueur {index + 1})
            </button>
          </div>
        ))}
      </div>
      <h2 className="current-player">Joueur actuel: {currentPlayer + 1}</h2>
      <button className="reset-button" onClick={resetGame}>
        Réinitialiser
      </button>

      {playerScores[0] !== playerScores[1] && (
        <h2 className="winner-message">Le joueur {winner} a gagné !</h2>
      )}
    </div>
  );
};

export default Game;

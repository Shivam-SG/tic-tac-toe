"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// Function to check for winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default function Multiplayer() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [draws, setDraws] = useState(0);
  const [winner, setWinner] = useState(null); // Declare winner state

  // Function to handle click on a square
  const handleClick = (i) => {
    if (winner || squares[i]) {
      return; // Return early if the game is already won or the square is already filled
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  // Function to reset the game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  useEffect(() => {
    const calculatedWinner = calculateWinner(squares); // Use a different variable name
    if (calculatedWinner) {
      setWinner(calculatedWinner); // Update winner state
      updateScore(calculatedWinner);
    } else if (squares.every((square) => square !== null)) {
      setWinner(null); // Update winner state
      updateScore(null);
    }
  }, [squares]);

  // Function to calculate scores
  const updateScore = (calculatedWinner) => {
    if (calculatedWinner === "X") {
      setScoreX(scoreX + 1);
    } else if (calculatedWinner === "O") {
      setScoreO(scoreO + 1);
    } else {
      setDraws(draws + 1);
    }
  };

  return (
    <div className="grid justify-center m-10">
      <h1 className="text-center mt-10 font-bold text-4xl text-blue-700 mb-6">
        Multiplayer Mode
      </h1>
      <div className="mb-4">
        <h2 className="text-center">Score</h2>
        <div className="flex justify-between">
          <p>Score X: {scoreX}</p>
          <p className="">Score O: {scoreO}</p>
        </div>
        <p className="text-center">Draws: {draws}</p>
      </div>
      <div className="border mb-6">
        <div className="grid grid-cols-3 mx-auto">
          {squares.map((square, i) => (
            <button
              key={i}
              className="flex justify-center items-center border w-[112px] h-[112px]"
              onClick={() => handleClick(i)}
            >
              {square === "X" ? (
                <img src="/cross.png" alt="X" className="w-15 h-15" />
              ) : square === "O" ? (
                <img src="/circle.png" alt="O" className="w-15 h-15" />
              ) : null}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-7">
        <button className="btn" onClick={resetGame}>
          Reset
        </button>
        <div>
          <Link href="/">Exit</Link>
        </div>
      </div>
    </div>
  );
}

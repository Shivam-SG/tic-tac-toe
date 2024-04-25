"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

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

export default function Practice() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [draws, setDraws] = useState(0);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = [...squares];
    newSquares[i] = "X";
    setSquares(newSquares);
    setXIsNext(false);

    setTimeout(() => {
      const computerMove = getComputerMove(newSquares);
      newSquares[computerMove] = "O";
      setSquares(newSquares);
      setXIsNext(true);
    }, 500);
  };

  const getComputerMove = (squares) => {
    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        squares[i] = "O";
        const score = minimax(squares, 0, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }

    return bestMove;
  };

  const minimax = (squares, depth, isMaximizing) => {
    const winner = calculateWinner(squares);
    if (winner) {
      return winner === "O" ? 10 : -10;
    }

    if (squares.every((square) => square !== null)) {
      return 0;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
          squares[i] = "O";
          const score = minimax(squares, depth + 1, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
          squares[i] = "X";
          const score = minimax(squares, depth + 1, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      if (winner === "X") {
        setScoreX(scoreX + 1);
      } else if (winner === "O") {
        setScoreO(scoreO + 1);
      }
    } else if (squares.every((square) => square !== null)) {
      setDraws(draws + 1);
    }
  }, [squares]);

  return (
    <div className="grid justify-center m-10">
      <h1 className="text-center mt-10 font-bold text-4xl text-blue-700 mb-6">
        Practice Mode
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
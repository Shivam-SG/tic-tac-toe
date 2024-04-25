"use client";

// import { useState } from 'react';
import Link from 'next/link';

// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// };
export default function Online() {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // const [roomCode, setRoomCode] = useState(null);
  // const [isRoomCreator, setIsRoomCreator] = useState(false);
  // const [joinCode, setJoinCode] = useState('');

  // const handleClick = (i) => {
  //   const newSquares = squares.slice();
  //   if (calculateWinner(newSquares) || newSquares[i]) {
  //     return;
  //   }
  //   newSquares[i] = xIsNext ? 'X' : 'O';
  //   setSquares(newSquares);
  //   setXIsNext(!xIsNext);
  // };

  // const resetGame = () => {
  //   setSquares(Array(9).fill(null));
  //   setXIsNext(true);
  // };

  // const createRoom = () => {
  //   const roomCode = Math.random().toString(36).substring(2, 7);
  //   setRoomCode(roomCode);
  //   setIsRoomCreator(true);
  // };

  // const joinRoom = () => {
  //   setRoomCode(joinCode);
  //   setIsRoomCreator(false); 
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Online Mode</h1>
        <div className="space-y-4 grid">
          <Link href="/practice">Practice Mode</Link>
          <Link href="/multiplayer">Multiplayer</Link>
          {/* <Link href="/online">Online Mode</Link> */}
        </div>
      </div>
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <h1 className="text-4xl font-bold mb-8">Online Mode</h1>
    //   {!roomCode && (
    //     <>
    //       <button className="btn" onClick={createRoom}>
    //         Create Room
    //       </button>
    //       <div className="mt-4">
    //         <input
    //           type="text"
    //           placeholder="Enter Room Code"
    //           value={joinCode}
    //           onChange={(e) => setJoinCode(e.target.value)}
    //           className="input"
    //         />
    //         <button className="btn" onClick={joinRoom}>
    //           Join Room
    //         </button>
    //       </div>
    //     </>
    //   )}
    //   {roomCode && (
    //     <>
    //       <p>Room Code: {roomCode}</p> {/* Display the entered room code */}
    //       <div className="grid grid-cols-3 gap-2 mb-4">
    //         {squares.map((square, i) => (
    //           <button
    //             key={i}
    //             className="btn-square"
    //             onClick={() => handleClick(i)}
    //             disabled={square !== null || calculateWinner(squares)}
    //           >
    //             {square}
    //           </button>
    //         ))}
    //       </div>
    //       <div className="space-x-4">
    //         <button className="btn" onClick={resetGame}>
    //           Reset
    //         </button>
    //         <Link href="/">
    //           Exit
    //         </Link>
    //       </div>
    //     </>
    //   )}
    // </div>
  );
};


import React, { useEffect, useState } from "react";
import "./styles.css";
function Square({ value, onclick }) {
  return (
    <button onClick={onclick} className="square">
      {value}
    </button>
  );
}
const TicTacToe = () => {
  const [squares, setsquares] = useState(Array(9).fill(""));
  const [isXTurn, setisXTurn] = useState(true);
  const [status, setstatus] = useState("");
  function getwinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }
  function handleclick(getcurrsquare) {
    let cpysquares = [...squares];
    if (getwinner(cpysquares) || cpysquares[getcurrsquare]) return;
    cpysquares[getcurrsquare] = isXTurn ? "X" : "O";
    setisXTurn(!isXTurn);
    setsquares(cpysquares);
  }
  function handlerestart() {
    setisXTurn(true);
    setsquares(Array(9).fill(""));
  }
  useEffect(() => {
    if (!getwinner(squares) && squares.every((item) => item !== "")) {
      setstatus(`This is a draw ! Please restart the game`);
    } else if (getwinner(squares)) {
      setstatus(`Winner is ${getwinner(squares)}. Please restart the game`);
    } else {
      setstatus(`Next Player is ${isXTurn ? "X" : "O"}`);
    }
  }, [isXTurn, squares]);
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onclick={() => handleclick(0)} />
        <Square value={squares[1]} onclick={() => handleclick(1)} />
        <Square value={squares[2]} onclick={() => handleclick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onclick={() => handleclick(3)} />
        <Square value={squares[4]} onclick={() => handleclick(4)} />
        <Square value={squares[5]} onclick={() => handleclick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onclick={() => handleclick(6)} />
        <Square value={squares[7]} onclick={() => handleclick(7)} />
        <Square value={squares[8]} onclick={() => handleclick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handlerestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;

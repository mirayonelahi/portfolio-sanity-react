import Board from "./Board";
import { useState } from "react";
import { calculateWinner } from "./helpers";
export default function Game() {
  const styles = {
    width: "200px",
    margin: "20px auto",
  };
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // If user click an occupied square or if game is won, return
    if (winner || squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : "Go to start";
      return (
        <div className="max-h-16" key={move}>
          <button
            className=" border-2 rounded shadow px-1 bg-blue-100 mt-2 hover:bg-blue-200"
            onClick={() => jumpTo(move)}
          >
            {destination}
          </button>
        </div>
      );
    });
  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  return (
    <div className="flex gap-10">
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </div>
  );
}

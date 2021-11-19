import './App.css';
import Board from './components/board/Board';
import { ISquareState } from './components/square/Square';
import { useState } from 'react';

const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const yAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

let init: ISquareState[] = [];

for (let i = yAxis.length - 1; i >= 0; i--) {
  for (let j = 0; j < xAxis.length; j++) {
    const number = j + i + 2;
    const cords = `${xAxis[j]}${yAxis[i]}`;
    const key = cords;
    let piece;
    if (yAxis[i] === '2') {
      piece = 'pawnW';
    } else {
      piece = '';
    }
    init.push({ number, cords, key, piece });
  }
}

function App() {
  let [board, setBoard] = useState(init);

  const onSquareClick = (cord: string) => {
    const updatedBoard = board.map((square) => ({
      ...square,
      selected: square.cords === cord,
    }));
    setBoard(updatedBoard);
  };

  return (
    <div className="app">
      <Board board={board} onSquareClick={onSquareClick} />
    </div>
  );
}

export default App;

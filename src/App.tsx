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
    let piece = '';
    init.push({ number, cords, key, piece });
  }
}

init.forEach((e) => {
  if (/2$/.test(e.cords)) {
    e.piece = 'pawnW';
  }
  if (/7$/.test(e.cords)) {
    e.piece = 'pawnB';
  }
  if (/a1|h1/.test(e.cords)) {
    e.piece = 'rookW';
  }
  if (/a8|h8/.test(e.cords)) {
    e.piece = 'rookB';
  }
  if (/b1|g1/.test(e.cords)) {
    e.piece = 'knightW';
  }
  if (/b8|g8/.test(e.cords)) {
    e.piece = 'knightB';
  }
  if (/c1|f1/.test(e.cords)) {
    e.piece = 'bishopW';
  }
  if (/c8|f8/.test(e.cords)) {
    e.piece = 'bishopB';
  }
  if (/d1/.test(e.cords)) {
    e.piece = 'queenW';
  }
  if (/d8/.test(e.cords)) {
    e.piece = 'queenB';
  }
  if (/e1/.test(e.cords)) {
    e.piece = 'kingW';
  }
  if (/e8/.test(e.cords)) {
    e.piece = 'kingB';
  }
});

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

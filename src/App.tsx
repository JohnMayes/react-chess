import './App.css';
import Board from './components/board/Board';
import { ISquareState } from './components/square/Square';
import { SyntheticEvent, useState } from 'react';
import pieces from './components/pieces/Pieces';

const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const yAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

let init: ISquareState[] = [];

for (let i = yAxis.length - 1; i >= 0; i--) {
  for (let j = 0; j < xAxis.length; j++) {
    const number = j + i + 2;
    const cords = `${xAxis[j]}${yAxis[i]}`;
    const key = cords;
    let piece = undefined;
    let hasPiece = false;
    init.push({ number, cords, key, piece, hasPiece });
  }
}

init.forEach((e) => {
  if (/2$/.test(e.cords)) {
    e.piece = pieces.PawnW;
    e.hasPiece = true;
  }
  if (/7$/.test(e.cords)) {
    e.piece = pieces.PawnB;
    e.hasPiece = true;
  }
  if (/a1|h1/.test(e.cords)) {
    e.piece = pieces.RookW;
    e.hasPiece = true;
  }
  if (/a8|h8/.test(e.cords)) {
    e.piece = pieces.RookB;
    e.hasPiece = true;
  }
  if (/b1|g1/.test(e.cords)) {
    e.piece = pieces.KnightW;
    e.hasPiece = true;
  }
  if (/b8|g8/.test(e.cords)) {
    e.piece = pieces.KnightB;
    e.hasPiece = true;
  }
  if (/c1|f1/.test(e.cords)) {
    e.piece = pieces.BishopW;
    e.hasPiece = true;
  }
  if (/c8|f8/.test(e.cords)) {
    e.piece = pieces.BishopB;
    e.hasPiece = true;
  }
  if (/d1/.test(e.cords)) {
    e.piece = pieces.QueenW;
    e.hasPiece = true;
  }
  if (/d8/.test(e.cords)) {
    e.piece = pieces.QueenB;
    e.hasPiece = true;
  }
  if (/e1/.test(e.cords)) {
    e.piece = pieces.KingW;
    e.hasPiece = true;
  }
  if (/e8/.test(e.cords)) {
    e.piece = pieces.KingB;
    e.hasPiece = true;
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

  function handleDrop(e: SyntheticEvent, cord: string) {
    e.preventDefault();
    const updatedBoard = board.map((square) => ({
      ...square,
      hasPiece: true,
      piece: square.cords === cord ? pieces.PawnW : square.piece,
    }));
    setBoard(updatedBoard);
  }

  function handleDragLeave(e: SyntheticEvent, cord: string) {
    e.preventDefault();
  }

  return (
    <div className="app">
      <Board
        board={board}
        onSquareClick={onSquareClick}
        handleDrop={handleDrop}
        handleDragLeave={handleDragLeave}
      />
    </div>
  );
}

export default App;

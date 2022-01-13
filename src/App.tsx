import './App.css';
import Board from './components/board/Board';
import Sidebar from './components/sidebar/Sidebar';
import {
  initializeBoardState,
  findPiece,
  capturePiece,
  placeDraggingPiece,
  removeDraggedPiece,
  ISquareState,
} from './constants/constants';
import React, { useState } from 'react';

let init: ISquareState[] = [];

initializeBoardState(init);

function App() {
  const [board, setBoard] = useState(init);
  const [capturedPieces, setCapturedPieces] = useState([]);
  const [move, setMove] = useState<{ piece: string; from: string; to: string }>(
    {
      piece: '',
      from: '',
      to: '',
    }
  );

  // function toggleHasPiece(cord: string) {
  //   const updatedBoard = board.map((square) => ({
  //     ...square,
  //     hasPiece: square.cords === cord ? !square.hasPiece : square.hasPiece,
  //   }));
  //   const find = updatedBoard.find((square) => square.cords === cord);
  //   console.log(`${find?.cords}: ${find?.hasPiece}`);
  //   setBoard(updatedBoard);
  // }

  const setMoveStart = (piece: string, cord: string) => {
    setMove((move) => ({
      ...move,
      piece: piece,
      from: cord,
      to: '',
    }));
  };

  const setMoveEnd = (cord: string) => {
    setMove((move) => ({
      ...move,
      to: cord,
    }));
  };

  const handleDragStart = (e: React.DragEvent, cord: string) => {
    const draggingPiece = findPiece(cord, board);
    setMoveStart(draggingPiece, cord);
  };

  const handleDragOver = (e: React.DragEvent, cord: string) => {
    e.preventDefault();
  };

  const handleDragEnd = (e: React.DragEvent, cord: string) => {
    e.preventDefault();
    const removedPiece = removeDraggedPiece(move.from, board);
    setBoard(removedPiece);
  };

  const handleDrop = (e: React.DragEvent, cord: string) => {
    e.preventDefault();
    setMoveEnd(cord);
    // Capture piece
    const piece = findPiece(cord, board);
    capturePiece(capturedPieces, piece);
    //setCapturedPieces(captured);
    // Place new Piece
    const placedPiece = placeDraggingPiece(cord, board, move.piece);
    setBoard(placedPiece);
  };

  console.log(move);

  return (
    <div className="app">
      <div className="background">
        <Board
          board={board}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDragEnd={handleDragEnd}
          handleDrop={handleDrop}
        />

        <Sidebar capturedPieces={capturedPieces} />
      </div>
    </div>
  );
}

export default App;

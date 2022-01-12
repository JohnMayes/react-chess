import './App.css';
import Board from './components/board/Board';
import { ReactComponentElement, ReactElement, useState } from 'react';
import {
  initializeBoardState,
  findPiece,
  capturePiece,
  placeDraggingPiece,
  removeDraggedPiece,
  ISquareState,
} from './constants/constants';

let init: ISquareState[] = [];

initializeBoardState(init);

// Write a function that uses computed properties to take a string and return the react element
// const returnPiece = (string: any, object: any): ReactElement => {
//   return object[string]
// }

// Move Pieces import into Square Component

// Replace all 'peices' props and state to strings

function App() {
  const [board, setBoard] = useState(init);
  const [draggingPiece, setDraggingPiece] = useState('');
  const [capturedPieces, setCapturedPieces] = useState([]);

  // function toggleHasPiece(cord: string) {
  //   const updatedBoard = board.map((square) => ({
  //     ...square,
  //     hasPiece: square.cords === cord ? !square.hasPiece : square.hasPiece,
  //   }));
  //   const find = updatedBoard.find((square) => square.cords === cord);
  //   console.log(`${find?.cords}: ${find?.hasPiece}`);
  //   setBoard(updatedBoard);
  // }

  const [move, setMove] = useState<{ from: string; to: string }>({
    from: '',
    to: '',
  });

  const onDragStart = (cord: string) => {
    setMove((move) => ({
      ...move,
      from: cord,
      to: '',
    }));
  };

  const onDragMove = (cord: string) => {
    setMove((move) => ({
      ...move,
      to: cord,
    }));
  };

  function handleDragStart(e: React.DragEvent, cord: string) {
    onDragStart(cord);
    const draggingPiece = findPiece(cord, board);
    setDraggingPiece(draggingPiece);
    const removedPiece = removeDraggedPiece(cord, board);
    setBoard(removedPiece);
  }

  function handleDragOver(e: React.DragEvent, cord: string) {
    e.preventDefault();
  }

  function handleDragEnd(e: React.DragEvent, cord: string) {
    e.preventDefault();
  }

  function handleDrop(e: React.DragEvent, cord: string) {
    e.preventDefault();
    onDragMove(cord);
    // Capture piece
    const piece = findPiece(cord, board);
    const captured = capturePiece(capturedPieces, piece);
    // setCapturedPieces(captured);
    // Place new Piece
    const placedPiece = placeDraggingPiece(cord, board, draggingPiece);
    setBoard(placedPiece);
  }
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
        <div>
          {capturedPieces.map((i) => {
            return <span>{i}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Board from './components/board/Board';
import {
  initializeBoardState,
  ISquareState,
  parseFen,
} from './constants/constants';
import { SyntheticEvent, useRef, useState } from 'react';

import Chess, { ChessInstance, Square } from 'chess.js';
type ChessType = (fen?: string) => ChessInstance;
const ChessImport = Chess as unknown;
const Chess2 = ChessImport as ChessType;

let init: ISquareState[] = [];

initializeBoardState(init);

function App() {
  const [board, setBoard] = useState(init);
  const [square, setSquare] = useState('');

  const game = Chess2();
  const chess = useRef(game);

  const updatePosition = (board: ISquareState[]) => {
    let fenPos = parseFen(chess.current.fen());
    let newBoard = board.slice();
    for (let i = 0; i <= 63; i++) {
      newBoard[i].piece = fenPos[i];
    }
    setBoard(newBoard);
  };

  const removeHilighting = () => {
    let deselectSquares = board.map((square) => ({
      ...square,
      canMove: false,
    }));
    setBoard(deselectSquares);
  };

  const highlightPossibleMoves = (cord: string) => {
    let validMoves = chess.current.moves({ square: cord, verbose: true });
    let moveArr = [];
    for (const move of validMoves) {
      moveArr.push(move.to);
    }
    let selectSquares = board.slice();
    for (const cord of moveArr) {
      for (const square of selectSquares) {
        if (square.cord === cord) {
          square.canMove = true;
        }
      }
      setBoard(selectSquares);
    }
  };

  const highlight = (cords: string) => {
    const highlighted = board.map((square) => ({
      ...square,
      selected: square.cord === cords ? true : false,
    }));
    setBoard(highlighted);
  };

  const move = (cord: string) => {
    chess.current.move({
      from: square as Square,
      to: cord as Square,
    });
  };

  const handleClick = (e: SyntheticEvent, cord: string) => {
    setSquare(cord);
    highlightPossibleMoves(cord);
    move(cord);
    updatePosition(board);
    highlight(cord);
  };

  const handlePointerOver = (e: SyntheticEvent, cord: string) => {
    highlightPossibleMoves(cord);
  };

  const handlePointerLeave = (e: SyntheticEvent, cord: string) => {
    removeHilighting();
  };

  return (
    <div className="app">
      <div className="background">
        <Board
          board={board}
          handleClick={handleClick}
          handlePointerOver={handlePointerOver}
          handlePointerLeave={handlePointerLeave}
        />
      </div>
    </div>
  );
}

export default App;

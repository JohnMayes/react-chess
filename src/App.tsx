import './App.css';
import Board from './components/board/Board';
import { initializeBoardState, ISquareState } from './constants/constants';
import React, { SyntheticEvent, useRef, useState } from 'react';

import Chess, { ChessInstance, Square } from 'chess.js';
import { get } from 'http';
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

  const updatePieces = () => {
    // const pieceArr = [];
    let peices = chess.current.board();
    for (let i = 0; i <= 8; i++) {
      for (let j = 0; j <= 8; j++) {
        console.log(`${peices[i][j]?.color}`);
      }
    }
    // console.log(pieceArr);
  };

  const handleClick = (e: SyntheticEvent, cord: string) => {
    setSquare(cord);
    let move = chess.current.move({
      from: square as Square,
      to: cord as Square,
    });
    console.log(move);
    const getPiece = chess.current.get(cord as Square);
    if (getPiece != null && move != null) {
      const newPiece = `${getPiece.type + getPiece.color}`;
      const setPiece = board.map((square) => ({
        ...square,
        piece: square.cord === cord ? newPiece : square.piece,
      }));
      setBoard(setPiece);
    }
    console.log(updatePieces());
  };
  console.log(chess.current.ascii());

  return (
    <div className="app">
      <div className="background">
        <Board board={board} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;

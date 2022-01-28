import './App.css';
import Board from './components/board/Board';
import { initializeBoardState, ISquareState } from './constants/constants';
import React, { SyntheticEvent, useRef, useState } from 'react';

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

  const numToEmptyStrings = (num: number) => {
    let arr = [];
    for (let i = num; i > 0; i--) {
      arr.push('');
    }
    return arr;
  };

  const parseFen = (fen: string) => {
    if (fen) {
      // Parses FEN in parts
      const parts = fen.replace(/^\s*/, '').replace(/\s*$/, '').split(/\/|\s/);
      // Slices pieces position of FEN by row
      const rows = parts.slice(0, 8);
      let arrFEN = [];
      // Splits each row into it's piece notation
      for (let e of rows) {
        // Splits each row into it's piece notation
        const spread: any = e.split('');
        // If string is a numeral, converts to a number
        for (let i = 0; i < spread.length; i++) {
          let char = spread[i];
          let num = Number(char);
          // replaces num with array of empty strings equal to num
          if (Number.isNaN(num) === false) {
            spread[i] = numToEmptyStrings(num);
          }
        }
        e = spread.flat();
        arrFEN.push(e);
      }
      const flatFEN = arrFEN.flat();
      return flatFEN;
    } else {
      throw new Error('Not a FEN!');
    }
  };

  const updatePosition = (board: ISquareState[]) => {
    let fenPos = parseFen(chess.current.fen());
    let newBoard = board.slice();
    for (let i = 0; i <= 63; i++) {
      newBoard[i].piece = fenPos[i];
    }
    return newBoard;
  };

  // console.log(board);
  // console.log(parseFen(chess.current.fen()));
  console.log(updatePosition(board));

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

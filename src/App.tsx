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

  const numToEmptyStrings = (num: number) => {
    let arr = [];
    for (let i = num; i > 0; i--) {
      arr.push('');
    }
    return arr;
  };

  type SpreadType = string[] | string[][];

  function setPosition(fen: string) {
    if (fen) {
      // Parses FEN
      const parts = fen.replace(/^\s*/, '').replace(/\s*$/, '').split(/\/|\s/);
      // Slices pieces position of FEN by row
      const rows = parts.slice(0, 8);
      // Splits each row into it's piece notation
      let arrFEN = [];
      for (let e of rows) {
        const spread: any = e.split('');
        // If string is a numeral, converts to a number
        for (let i = 0; i < spread.length; i++) {
          let char = spread[i];
          let num = Number(char);
          if (Number.isNaN(num) === false) {
            spread[i] = numToEmptyStrings(num);
          }
        }
        e = spread.flat();
        arrFEN.push(e);
      }
      const flatFEN = arrFEN.flat();
      console.log(flatFEN);
    }
  }

  // console.log(numToEmptyStrings(8));
  console.log(board);
  setPosition('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

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

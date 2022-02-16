import { SyntheticEvent } from 'react';
import { ReactElement } from 'react';

// INTERFACES
export interface ISquareProps {
  handleClick: (e: SyntheticEvent, cord: string) => void;
  handlePointerOver: (e: SyntheticEvent, cord: string) => void;
  handlePointerLeave: (e: SyntheticEvent, cord: string) => void;
}

export interface ISquareState {
  number: number;
  cord: string;
  key: string;
  piece: string;
  selected: boolean;
  canMove: boolean;
}

// TYPES

export type PiecesType = {
  P: ReactElement;
  p: ReactElement;
  R: ReactElement;
  r: ReactElement;
  N: ReactElement;
  n: ReactElement;
  B: ReactElement;
  b: ReactElement;
  Q: ReactElement;
  q: ReactElement;
  K: ReactElement;
  k: ReactElement;
};

//  BOARD STATE

const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const yAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const initializeBoardState = (arr: ISquareState[]): ISquareState[] => {
  for (let i = yAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < xAxis.length; j++) {
      const number = j + i + 2;
      const cord = `${xAxis[j]}${yAxis[i]}`;
      const key = cord;
      const piece = '';
      const selected = false;
      const canMove = false;
      arr.push({ number, cord, key, piece, selected, canMove });
    }
  }

  arr.forEach((e) => {
    if (/2$/.test(e.cord)) {
      e.piece = 'P';
    }
    if (/7$/.test(e.cord)) {
      e.piece = 'p';
    }
    if (/a1|h1/.test(e.cord)) {
      e.piece = 'R';
    }
    if (/a8|h8/.test(e.cord)) {
      e.piece = 'r';
    }
    if (/b1|g1/.test(e.cord)) {
      e.piece = 'N';
    }
    if (/b8|g8/.test(e.cord)) {
      e.piece = 'n';
    }
    if (/c1|f1/.test(e.cord)) {
      e.piece = 'B';
    }
    if (/c8|f8/.test(e.cord)) {
      e.piece = 'b';
    }
    if (/d1/.test(e.cord)) {
      e.piece = 'Q';
    }
    if (/d8/.test(e.cord)) {
      e.piece = 'q';
    }
    if (/e1/.test(e.cord)) {
      e.piece = 'K';
    }
    if (/e8/.test(e.cord)) {
      e.piece = 'k';
    }
  });
  return arr;
};

// HELPER FUNCTIONS

function ensure<T>(
  argument: T | undefined | null,
  message: string = 'This value was promised to be there.'
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}

export const findPiece = (cord: string, arr: ISquareState[]): string => {
  const find = arr.find((square) => square.cord === cord);
  return ensure(find?.piece);
};

export const getPieceFromKey = (
  cord: string,
  object: PiecesType
): ReactElement => {
  return object[cord as keyof typeof object];
};

export const numToEmptyStrings = (num: number) => {
  let arr = [];
  for (let i = num; i > 0; i--) {
    arr.push('');
  }
  return arr;
};

export const parseFen = (fen: string) => {
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

// FUNCTIONS THAT INTERACT WITH BOARD STATE

export const capturePiece = (state: string[], piece: string): string[] => {
  const pieceArr = state;
  pieceArr.push(piece);
  return pieceArr;
};

export const placeDraggingPiece = (
  cord: string,
  board: ISquareState[],
  draggingPiece: string
): ISquareState[] => {
  const placedPiece = board.map((square) => ({
    ...square,
    piece: square.cord === cord ? draggingPiece : square.piece,
  }));
  return placedPiece;
};

export const removeDraggedPiece = (
  cord: string,
  board: ISquareState[]
): ISquareState[] => {
  const removedPiece = board.map((square) => ({
    ...square,
    piece: square.cord === cord && square.piece ? '' : square.piece,
  }));
  return removedPiece;
};

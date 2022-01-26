import React, { SyntheticEvent } from 'react';
import { ReactElement } from 'react';

// INTERFACES
export interface ISquareProps {
  handleClick: (e: SyntheticEvent, cord: string) => void;
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
  pw: ReactElement;
  pb: ReactElement;
  rw: ReactElement;
  rb: ReactElement;
  nw: ReactElement;
  nb: ReactElement;
  bw: ReactElement;
  bb: ReactElement;
  qw: ReactElement;
  qb: ReactElement;
  kw: ReactElement;
  kb: ReactElement;
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
      e.piece = 'pw';
    }
    if (/7$/.test(e.cord)) {
      e.piece = 'pb';
    }
    if (/a1|h1/.test(e.cord)) {
      e.piece = 'rw';
    }
    if (/a8|h8/.test(e.cord)) {
      e.piece = 'rb';
    }
    if (/b1|g1/.test(e.cord)) {
      e.piece = 'nw';
    }
    if (/b8|g8/.test(e.cord)) {
      e.piece = 'nb';
    }
    if (/c1|f1/.test(e.cord)) {
      e.piece = 'bw';
    }
    if (/c8|f8/.test(e.cord)) {
      e.piece = 'bb';
    }
    if (/d1/.test(e.cord)) {
      e.piece = 'qw';
    }
    if (/d8/.test(e.cord)) {
      e.piece = 'qb';
    }
    if (/e1/.test(e.cord)) {
      e.piece = 'kw';
    }
    if (/e8/.test(e.cord)) {
      e.piece = 'kb';
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

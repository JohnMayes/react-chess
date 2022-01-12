import React from 'react';
import { ReactElement } from 'react';

// INTERFACES
export interface ISquareProps {
  handleDrop: (e: React.DragEvent, cord: string) => void;
  handleDragEnd: (e: React.DragEvent, cord: string) => void;
  handleDragStart: (e: React.DragEvent, cord: string) => void;
  handleDragOver: (e: React.DragEvent, cord: string) => void;
  override?: React.HTMLAttributes<HTMLDivElement>;
}

export interface ISquareState {
  number: number;
  cords: string;
  key: string;
  hasPiece: boolean;
  piece: string;
}

// TYPES

export type PiecesType = {
  PawnW: ReactElement;
  PawnB: ReactElement;
  RookW: ReactElement;
  RookB: ReactElement;
  KnightW: ReactElement;
  KnightB: ReactElement;
  BishopW: ReactElement;
  BishopB: ReactElement;
  QueenW: ReactElement;
  QueenB: ReactElement;
  KingW: ReactElement;
  KingB: ReactElement;
};

//  BOARD STATE

const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const yAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const initializeBoardState = (arr: ISquareState[]): ISquareState[] => {
  for (let i = yAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < xAxis.length; j++) {
      const number = j + i + 2;
      const cords = `${xAxis[j]}${yAxis[i]}`;
      const key = cords;
      const piece = '';
      const hasPiece = false;
      arr.push({ number, cords, key, piece, hasPiece });
    }
  }

  arr.forEach((e) => {
    if (/2$/.test(e.cords)) {
      e.piece = 'PawnW';
      e.hasPiece = true;
    }
    if (/7$/.test(e.cords)) {
      e.piece = 'PawnB';
      e.hasPiece = true;
    }
    if (/a1|h1/.test(e.cords)) {
      e.piece = 'RookW';
      e.hasPiece = true;
    }
    if (/a8|h8/.test(e.cords)) {
      e.piece = 'RookB';
      e.hasPiece = true;
    }
    if (/b1|g1/.test(e.cords)) {
      e.piece = 'KnightW';
      e.hasPiece = true;
    }
    if (/b8|g8/.test(e.cords)) {
      e.piece = 'KnightB';
      e.hasPiece = true;
    }
    if (/c1|f1/.test(e.cords)) {
      e.piece = 'BishopW';
      e.hasPiece = true;
    }
    if (/c8|f8/.test(e.cords)) {
      e.piece = 'BishopB';
      e.hasPiece = true;
    }
    if (/d1/.test(e.cords)) {
      e.piece = 'QueenW';
      e.hasPiece = true;
    }
    if (/d8/.test(e.cords)) {
      e.piece = 'QueenB';
      e.hasPiece = true;
    }
    if (/e1/.test(e.cords)) {
      e.piece = 'KingW';
      e.hasPiece = true;
    }
    if (/e8/.test(e.cords)) {
      e.piece = 'KingB';
      e.hasPiece = true;
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
  const find = arr.find((square) => square.cords === cord);
  return ensure(find?.piece);
};

export const getPieceFromKey = (
  key: string,
  object: PiecesType
): ReactElement => {
  return object[key as keyof typeof object];
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
    piece: square.cords === cord ? draggingPiece : square.piece,
  }));
  return placedPiece;
};

export const removeDraggedPiece = (
  cord: string,
  board: ISquareState[]
): ISquareState[] => {
  const removedPiece = board.map((square) => ({
    ...square,
    piece: square.cords === cord && square.piece ? '' : square.piece,
  }));
  return removedPiece;
};

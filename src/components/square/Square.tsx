import './square.css';
import pieces from '../pieces/Pieces';
import { SyntheticEvent } from 'react';

interface ISquareProps extends ISquareState {
  onClick: (cord: string) => void;
}

export interface ISquareState {
  number: number;
  cords: string;
  key: string;
  selected?: boolean;
  piece: string;
}

export default function Square(props: ISquareProps) {
  let classList = 'board-square';

  if (props.number % 2 === 0) {
    classList += ' black';
  } else {
    classList += ' white';
  }

  function checkPiece(str: string) {
    switch (str) {
      case 'pawnW':
        return <div>{pieces.PawnW}</div>;
      case 'pawnB':
        return <div>{pieces.PawnB}</div>;
      case 'rookW':
        return <div>{pieces.RookW}</div>;
      case 'rookB':
        return <div>{pieces.RookB}</div>;
      case 'knightW':
        return <div>{pieces.KnightW}</div>;
      case 'knightB':
        return <div>{pieces.KnightB}</div>;
      case 'bishopW':
        return <div>{pieces.BishopW}</div>;
      case 'bishopB':
        return <div>{pieces.BishopB}</div>;
      case 'queenW':
        return <div>{pieces.QueenW}</div>;
      case 'queenB':
        return <div>{pieces.QueenB}</div>;
      case 'kingW':
        return <div>{pieces.KingW}</div>;
      case 'kingB':
        return <div>{pieces.KingB}</div>;
    }
  }

  function handleDrop(e: SyntheticEvent) {
    e.preventDefault();
    console.log(` moved to ${props.cords}`);
  }

  function handleDragOver(e: SyntheticEvent) {
    e.preventDefault();
  }

  function handleDragLeave(e: SyntheticEvent) {
    e.preventDefault();
    console.log(`${props.piece}`);
  }

  return (
    <div
      className={classList}
      onClick={() => props.onClick(props.cords)}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      {/* <div className="cords">{props.cords}</div> */}
      {checkPiece(props.piece)}
    </div>
  );
}

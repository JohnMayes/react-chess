import './square.css';
import pieces from '../pieces/Pieces';
import { ReactElement, SyntheticEvent } from 'react';

interface ISquareProps extends ISquareState {
  onClick: (cord: string) => void;
  onDrop: (e: SyntheticEvent, cord: string) => void;
  onDragLeave: (e: SyntheticEvent, cord: string) => void;
}

export interface ISquareState {
  number: number;
  cords: string;
  key: string;
  hasPiece: boolean;
  piece: undefined | ReactElement;
}

export default function Square(props: ISquareProps) {
  let classList = 'board-square';

  if (props.number % 2 === 0) {
    classList += ' black';
  } else {
    classList += ' white';
  }

  function checkPiece(bool: boolean) {
    if (props.hasPiece) {
      return props.piece;
    }
  }

  function handleDragOver(e: SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <div
      className={classList}
      onClick={() => props.onClick(props.cords)}
      onDrop={(e) => props.onDrop(e, props.cords)}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => props.onDragLeave(e, props.cords)}
    >
      {/* <div className="cords">{props.cords}</div> */}

      {checkPiece(props.hasPiece)}
    </div>
  );
}

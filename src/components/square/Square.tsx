import './square.css';
import { ReactElement, SyntheticEvent } from 'react';

interface ISquareProps extends ISquareState {
  handleDrop: (e: SyntheticEvent, cord: string) => void;
  handleDrag: (e: SyntheticEvent, cord: string) => void;
  handleGrab: (e: SyntheticEvent, cord: string) => void;
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

  return (
    <div
      className={classList}
      onDragOver={(e) => props.handleDrag(e, props.cords)}
      onDrop={(e) => props.handleDrop(e, props.cords)}
      onDrag={(e) => props.handleGrab(e, props.cords)}
    >
      {/* <div className="cords">{props.cords}</div> */}

      {checkPiece(props.hasPiece)}
    </div>
  );
}

import './square.css';
import { ReactElement, SyntheticEvent } from 'react';

interface ISquareProps extends ISquareState {
  handleDrop: (e: SyntheticEvent, cord: string) => void;
  handleDrag: (e: SyntheticEvent, cord: string) => void;
  handleGrab: (e: React.DragEvent<HTMLDivElement>, cord: string) => void;
  handleDragOver: (e: SyntheticEvent, cord: string) => void;
}

export interface ISquareState {
  number: number;
  cords: string;
  key: string;
  hasPiece: boolean;
  piece: any | ReactElement;
}

export default function Square(props: ISquareProps) {
  let classList = 'board-square';

  if (props.number % 2 === 0) {
    classList += ' black';
  } else {
    classList += ' white';
  }

  return (
    <div
      className={classList}
      onDragStart={(e) => props.handleGrab(e, props.cords)}
      onDrag={(e) => props.handleDrag(e, props.cords)}
      onDragOver={(e) => props.handleDragOver(e, props.cords)}
      onDrop={(e) => props.handleDrop(e, props.cords)}
    >
      <div className="cords">{props.cords}</div>

      {props.piece}
    </div>
  );
}

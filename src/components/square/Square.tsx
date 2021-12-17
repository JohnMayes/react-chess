import './square.css';
import { ReactElement } from 'react';

export interface ISquareProps {
  handleDrop: (e: React.DragEvent<HTMLDivElement>, cord: string) => void;
  handleDragEnd: (e: React.DragEvent<HTMLDivElement>, cord: string) => void;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, cord: string) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>, cord: string) => void;
}

export interface ISquareState {
  number: number;
  cords: string;
  key: string;
  hasPiece: boolean;
  piece: any | ReactElement;
}

export default function Square(props: ISquareProps & ISquareState) {
  let classList = 'board-square';

  if (props.number % 2 === 0) {
    classList += ' black';
  } else {
    classList += ' white';
  }

  return (
    <div
      className={classList}
      onDragStart={(e) => props.handleDragStart(e, props.cords)}
      onDragEnd={(e) => props.handleDragEnd(e, props.cords)}
      onDragOver={(e) => props.handleDragOver(e, props.cords)}
      onDrop={(e) => props.handleDrop(e, props.cords)}
    >
      <div className="cords">{props.cords}</div>

      {props.piece}
    </div>
  );
}

import './square.css';
import { ISquareState, ISquareProps } from '../../constants/constants';
import pieces from '../pieces/Pieces';
import { ReactElement } from 'react';

export default function Square(props: ISquareProps & ISquareState) {
  let classList = 'board-square';

  if (props.number % 2 === 0) {
    classList += ' black';
  } else {
    classList += ' white';
  }

  const returnPiece = (string: string, object: any): ReactElement => {
    return object[string];
  };

  return (
    <div
      className={classList}
      onDragStart={(e) => props.handleDragStart(e, props.cords)}
      onDragEnd={(e) => props.handleDragEnd(e, props.cords)}
      onDragOver={(e) => props.handleDragOver(e, props.cords)}
      onDrop={(e) => props.handleDrop(e, props.cords)}
    >
      <div className="cords">{props.cords}</div>
      <div draggable="true">{returnPiece(props.piece, pieces)}</div>
    </div>
  );
}

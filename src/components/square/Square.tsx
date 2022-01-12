import './square.css';
import {
  ISquareState,
  ISquareProps,
  getPieceFromKey,
} from '../../constants/constants';
import pieces from '../pieces/Pieces';

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
      <div draggable="true">{getPieceFromKey(props.piece, pieces)}</div>
    </div>
  );
}

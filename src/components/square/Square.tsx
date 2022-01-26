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

  if (props.selected === true) {
    classList += ' selected';
  }

  return (
    <div
      className={classList}
      onClick={(e) => props.handleClick(e, props.cord)}
    >
      <div className="cords">{props.cord}</div>
      <div>{getPieceFromKey(props.piece, pieces)}</div>
    </div>
  );
}

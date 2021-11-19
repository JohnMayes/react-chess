import './square.css';
import { ReactComponent as PawnW } from '../../assets/pawn-white.svg';

interface ISquareProps extends ISquareState {
  onClick: (cord: string) => void;
}

export interface ISquareState {
  number: number;
  cords: string;
  key?: string;
  selected?: boolean;
  piece: string;
}

export default function Square(props: ISquareProps) {
  let classList = 'board-square';

  if (props.selected) {
    classList += ' selected';
  }

  if (props.number % 2 === 0) {
    classList += ' black';
  } else {
    classList += ' white';
  }

  function checkPiece(str: string) {
    if (str === 'pawnW') {
      return (
        <div>
          <PawnW className="chessPiece " />
        </div>
      );
    }
  }

  return (
    <div className={classList} onClick={() => props.onClick(props.cords)}>
      <div className="cords">{props.cords}</div>
      {checkPiece(props.piece)}
    </div>
  );
}

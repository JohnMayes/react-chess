import './square.css';
import { ReactComponent as PawnW } from '../../assets/pawn-white.svg';
import { ReactComponent as PawnB } from '../../assets/pawn-black.svg';
import { ReactComponent as RookW } from '../../assets/rook-white.svg';
import { ReactComponent as RookB } from '../../assets/rook-black.svg';
import { ReactComponent as KnightW } from '../../assets/knight-white.svg';
import { ReactComponent as KnightB } from '../../assets/knight-black.svg';
import { ReactComponent as BishopW } from '../../assets/bishop-white.svg';
import { ReactComponent as BishopB } from '../../assets/bishop-black.svg';
import { ReactComponent as QueenW } from '../../assets/queen-white.svg';
import { ReactComponent as QueenB } from '../../assets/queen-black.svg';
import { ReactComponent as KingW } from '../../assets/king-white.svg';
import { ReactComponent as KingB } from '../../assets/king-black.svg';

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

  if (props.selected) {
    classList += ' selected';
  }

  if (props.number % 2 === 0) {
    classList += ' black';
  } else {
    classList += ' white';
  }

  function checkPiece(str: string) {
    switch (str) {
      case 'pawnW':
        return (
          <div>
            <PawnW className="chessPiece " />
          </div>
        );
      case 'pawnB':
        return (
          <div>
            <PawnB className="chessPiece" />
          </div>
        );
      case 'rookW':
        return (
          <div>
            <RookW className="chessPiece" />
          </div>
        );
      case 'rookB':
        return (
          <div>
            <RookB className="chessPiece" />
          </div>
        );
      case 'knightW':
        return (
          <div>
            <KnightW className="chessPiece" />
          </div>
        );
      case 'knightB':
        return (
          <div>
            <KnightB className="chessPiece" />
          </div>
        );
      case 'bishopW':
        return (
          <div>
            <BishopW className="chessPiece" />
          </div>
        );
      case 'bishopB':
        return (
          <div>
            <BishopB className="chessPiece" />
          </div>
        );
      case 'queenW':
        return (
          <div>
            <QueenW className="chessPiece" />
          </div>
        );
      case 'queenB':
        return (
          <div>
            <QueenB className="chessPiece" />
          </div>
        );
      case 'kingW':
        return (
          <div>
            <KingW className="chessPiece" />
          </div>
        );
      case 'kingB':
        return (
          <div>
            <KingB className="chessPiece" />
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

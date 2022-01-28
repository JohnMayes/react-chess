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
import { PiecesType } from '../../constants/constants';

const pieces: PiecesType = {
  P: <PawnW className="chessPiece" />,
  p: <PawnB className="chessPiece" />,
  R: <RookW className="chessPiece" />,
  r: <RookB className="chessPiece" />,
  N: <KnightW className="chessPiece" />,
  n: <KnightB className="chessPiece" />,
  B: <BishopW className="chessPiece" />,
  b: <BishopB className="chessPiece" />,
  Q: <QueenW className="chessPiece" />,
  q: <QueenB className="chessPiece" />,
  K: <KingW className="chessPiece" />,
  k: <KingB className="chessPiece" />,
};

export default pieces;

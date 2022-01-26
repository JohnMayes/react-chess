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
  pw: <PawnW className="chessPiece" />,
  pb: <PawnB className="chessPiece" />,
  rw: <RookW className="chessPiece" />,
  rb: <RookB className="chessPiece" />,
  nw: <KnightW className="chessPiece" />,
  nb: <KnightB className="chessPiece" />,
  bw: <BishopW className="chessPiece" />,
  bb: <BishopB className="chessPiece" />,
  qw: <QueenW className="chessPiece" />,
  qb: <QueenB className="chessPiece" />,
  kw: <KingW className="chessPiece" />,
  kb: <KingB className="chessPiece" />,
};

export default pieces;

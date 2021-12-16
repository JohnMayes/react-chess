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

const pieces = {
  PawnW: (
    <div draggable>
      <PawnW className="chessPiece" />
    </div>
  ),
  PawnB: (
    <div draggable="true">
      <PawnB className="chessPiece" />
    </div>
  ),
  RookW: (
    <div draggable="true">
      <RookW className="chessPiece" />
    </div>
  ),
  RookB: (
    <div draggable="true">
      <RookB className="chessPiece" />
    </div>
  ),
  KnightW: (
    <div draggable="true">
      <KnightW className="chessPiece" />
    </div>
  ),
  KnightB: (
    <div draggable="true">
      <KnightB className="chessPiece" />
    </div>
  ),
  BishopW: (
    <div draggable="true">
      <BishopW className="chessPiece" />
    </div>
  ),
  BishopB: (
    <div draggable="true">
      <BishopB className="chessPiece" />
    </div>
  ),
  QueenW: (
    <div draggable="true">
      <QueenW className="chessPiece" />
    </div>
  ),
  QueenB: (
    <div draggable="true">
      <QueenB className="chessPiece" />
    </div>
  ),
  KingW: (
    <div draggable="true">
      <KingW className="chessPiece" />
    </div>
  ),
  KingB: (
    <div draggable="true">
      <KingB className="chessPiece" />
    </div>
  ),
  Empty: <div draggable="true"></div>,
};

export default pieces;

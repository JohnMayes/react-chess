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
import Draggable from 'react-draggable';

const pieces = {
  PawnW: (
    <Draggable grid={[60, 60]}>
      <PawnW className="chessPiece" />
    </Draggable>
  ),
  PawnB: (
    <Draggable grid={[60, 60]}>
      <PawnB className="chessPiece" />
    </Draggable>
  ),
  RookW: (
    <Draggable grid={[60, 60]}>
      <RookW className="chessPiece" />
    </Draggable>
  ),
  RookB: (
    <Draggable grid={[60, 60]}>
      <RookB className="chessPiece" />
    </Draggable>
  ),
  KnightW: (
    <Draggable grid={[60, 60]}>
      <KnightW className="chessPiece" />
    </Draggable>
  ),
  KnightB: (
    <Draggable grid={[60, 60]}>
      <KnightB className="chessPiece" />
    </Draggable>
  ),
  BishopW: (
    <Draggable grid={[60, 60]}>
      <BishopW className="chessPiece" />
    </Draggable>
  ),
  BishopB: (
    <Draggable grid={[60, 60]}>
      <BishopB className="chessPiece" />
    </Draggable>
  ),
  QueenW: (
    <Draggable grid={[60, 60]}>
      <QueenW className="chessPiece" />
    </Draggable>
  ),
  QueenB: (
    <Draggable grid={[60, 60]}>
      <QueenB className="chessPiece" />
    </Draggable>
  ),
  KingW: (
    <Draggable grid={[60, 60]}>
      <KingW className="chessPiece" />
    </Draggable>
  ),
  KingB: (
    <Draggable grid={[60, 60]}>
      <KingB className="chessPiece" />
    </Draggable>
  ),
};

export default pieces;

import React from 'react';
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
  PawnW: <PawnW className="chessPiece" />,
  PawnB: <PawnB className="chessPiece" />,
  RookW: <RookW className="chessPiece" />,
  RookB: <RookB className="chessPiece" />,
  KnightW: <KnightW className="chessPiece" />,
  KnightB: <KnightB className="chessPiece" />,
  BishopW: <BishopW className="chessPiece" />,
  BishopB: <BishopB className="chessPiece" />,
  QueenW: <QueenW className="chessPiece" />,
  QueenB: <QueenB className="chessPiece" />,
  KingW: <KingW className="chessPiece" />,
  KingB: <KingB className="chessPiece" />,
};

export default pieces;

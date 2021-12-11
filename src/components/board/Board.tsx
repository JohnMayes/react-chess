import './board.css';
import Square, { ISquareState } from '../square/Square';
import { SyntheticEvent } from 'react';

interface IBoardProps {
  board: ISquareState[];
  handleDrop: (e: SyntheticEvent, cord: string) => void;
  handleDrag: (e: SyntheticEvent, cord: string) => void;
  handleGrab: (e: SyntheticEvent, cord: string) => void;
}

export default function Board(props: IBoardProps) {
  let fillBoard = props.board.map((i) => (
    <Square
      number={i.number}
      cords={i.cords}
      key={i.cords}
      hasPiece={i.hasPiece}
      piece={i.piece}
      handleDrag={props.handleDrag}
      handleDrop={props.handleDrop}
      handleGrab={props.handleGrab}
    />
  ));

  return (
    <div className="background">
      <div className="board">{fillBoard}</div>
    </div>
  );
}

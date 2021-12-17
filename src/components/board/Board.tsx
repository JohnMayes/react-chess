import './board.css';
import Square, { ISquareState, ISquareProps } from '../square/Square';

interface IBoardProps extends ISquareProps {
  board: ISquareState[];
}

export default function Board(props: IBoardProps) {
  let fillBoard = props.board.map((i) => (
    <Square
      number={i.number}
      cords={i.cords}
      key={i.cords}
      hasPiece={i.hasPiece}
      piece={i.piece}
      handleDragEnd={props.handleDragEnd}
      handleDrop={props.handleDrop}
      handleDragStart={props.handleDragStart}
      handleDragOver={props.handleDragOver}
    />
  ));

  return (
    <div className="background">
      <div className="board">{fillBoard}</div>
    </div>
  );
}

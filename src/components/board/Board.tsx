import './board.css';
import Square from '../square/Square';
import { ISquareState, ISquareProps } from '../../constants/constants';

interface IBoardProps extends ISquareProps {
  board: ISquareState[];
}

export default function Board(props: IBoardProps) {
  let fillBoard = props.board.map((i) => (
    <Square
      override={{ onDragStart: () => {} }}
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

  return <div className="board">{fillBoard}</div>;
}

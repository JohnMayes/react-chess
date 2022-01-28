import './board.css';
import Square from '../square/Square';
import { ISquareState, ISquareProps } from '../../constants/constants';

interface IBoardProps extends ISquareProps {
  board: ISquareState[];
}

export default function Board(props: IBoardProps) {
  let fillBoard = props.board.map((i) => (
    <Square
      number={i.number}
      cord={i.cord}
      key={i.key}
      piece={i.piece}
      selected={i.selected}
      canMove={i.canMove}
      handleClick={props.handleClick}
      handleDragOver={props.handleDragOver}
      handleDrop={props.handleDrop}
      handleMouseOver={props.handleMouseOver}
      handleDragLeave={props.handleDragLeave}
    />
  ));

  return <div className="board">{fillBoard}</div>;
}

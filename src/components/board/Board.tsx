import './board.css';
import Square, { ISquareState } from '../square/Square';

interface IBoardProps {
  board: ISquareState[];
  onSquareClick: (cord: string) => void;
}

export default function Board(props: IBoardProps) {
  let fillBoard = props.board.map((i) => (
    <Square
      number={i.number}
      cords={i.cords}
      key={i.cords}
      onClick={props.onSquareClick}
      selected={i.selected}
    />
  ));

  return <div className="board">{fillBoard}</div>;
}

import './square.css';

interface ISquareProps extends ISquareState {
  onClick: (cord: string) => void;
}

export interface ISquareState {
  number: number;
  cords: string;
  key?: string;
  selected?: boolean;
}

export default function Square(props: ISquareProps) {
  let classList = 'board-square';

  if (props.selected) {
    classList += ' selected';
  }

  if (props.number % 2 === 0) {
    classList += ' black';
  } else {
    classList += ' white';
  }
  return (
    <div className={classList} onClick={() => props.onClick(props.cords)}>
      <div className="cords">{props.cords}</div>
    </div>
  );
}

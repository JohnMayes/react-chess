import './board.css';
import Square from '../square/Square';
import { ISquareState, ISquareProps } from '../../constants/constants';
import React, { useState } from 'react';

interface IBoardProps extends ISquareProps {
  board: ISquareState[];
}

export default function Board(props: IBoardProps) {
  // const [move, setMove] = useState<{ from: string; to: string }>({
  //   from: '',
  //   to: '',
  // });

  // const onDragStart = (e: React.DragEvent, cord: string) => {
  //   setMove((move) => ({
  //     ...move,
  //     from: cord,
  //   }));
  // };

  // Define master function to validate moves, return

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

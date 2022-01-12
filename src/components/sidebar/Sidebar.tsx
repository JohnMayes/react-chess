import './sidebar.css';
import { getPieceFromKey } from '../../constants/constants';
import pieces from '../pieces/Pieces';

export default function Sidebar(props: any) {
  return (
    <div className="sidebar">
      <h1>Captured Pieces:</h1>
      <div className="capturedPieces">
        {props.capturedPieces.map((i: any) => {
          return <span>{getPieceFromKey(i, pieces)}</span>;
        })}
      </div>
    </div>
  );
}

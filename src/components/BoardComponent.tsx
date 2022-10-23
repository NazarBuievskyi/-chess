import React, {FC} from 'react';
import {Board} from "../models/Board";
import {CellComponent} from "./CellComponent";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void;
}

export const BoardComponent: FC<BoardProps> = ({setBoard, board}) => {
    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            cell={cell}
                            key={cell.id}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}
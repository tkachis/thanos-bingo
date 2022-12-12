import { useState, useCallback, useEffect } from "react";

import winnerSong from "assets/winner-song.mp3";
import { BoardData } from "models";

const audio = new Audio(winnerSong);

const useBoardTable = (dictionary) => {
  const [board, setBoard] = useState(() => new BoardData(dictionary));
  const [lastSelectedCell, setLastSelectedCell] = useState(null);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    setBoard(new BoardData(dictionary));
    setFinish(false);
    audio.pause();
    audio.currentTime = 0;
  }, [dictionary]);

  useEffect(() => {
    if (lastSelectedCell === null) {
      return;
    }

    const { rowIndex, columnIndex } = lastSelectedCell;

    if (board.gameIsFinish(rowIndex, columnIndex)) {
      setFinish(true);
      audio.play();
    }
  }, [lastSelectedCell, board]);

  const onSelect = useCallback((cell) => {
    const { rowIndex, columnIndex } = cell;
    setBoard((prevBoard) => prevBoard.toggleCell(rowIndex, columnIndex));
    setLastSelectedCell(cell);
  }, []);

  return { board, finish, onSelect };
};

export default useBoardTable;

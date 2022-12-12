import { useState } from "react";
import shuffle from "lodash/shuffle";

import { CellData } from "models";
import { PHRASES, GAME_SIZE } from "utils/settings";

function processDictionary(size, elements) {
  const cellsCount = size ** 2;
  const elementsWithCentralCell = elements.length + 1;

  if (elementsWithCentralCell < cellsCount) {
    throw new Error("Not enough phrases in the dictionary");
  }

  const rowsCount = size - 1;
  const cellsPerRow = rowsCount;
  const shuffledElements = shuffle(elements);

  const hasCenter = size % 2;

  if (hasCenter) {
    const centralElementIndex = Math.floor(cellsCount / 2);
    const centralElementRowIndex = Math.floor(centralElementIndex / size);
    const centralElementColumnIndex = centralElementIndex % size;
    const centralElement = new CellData(
      "",
      true,
      centralElementRowIndex,
      centralElementColumnIndex
    );

    shuffledElements.splice(centralElementIndex, 0, centralElement);
  }

  let rowIndex = 0;
  let columnIndex = 0;

  const dictionary = shuffledElements.map((element) => {
    const isCentralElement = element instanceof CellData;

    const cellData = isCentralElement
      ? element
      : new CellData(element, false, rowIndex, columnIndex);

    if (columnIndex === cellsPerRow) {
      columnIndex = 0;
      rowIndex++;
    } else {
      columnIndex++;
    }

    return cellData;
  });

  return dictionary;
}

const useDictionary = (size = GAME_SIZE, phrases = PHRASES) => {
  const [dictionary, setDictionary] = useState(() =>
    processDictionary(size, phrases)
  );

  const onRefresh = () => {
    const newDictionary = processDictionary(size, phrases);

    setDictionary(newDictionary);
  };

  return { dictionary, onRefresh };
};

export default useDictionary;

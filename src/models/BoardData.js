import every from "lodash/every";

export default class BoardData {
  table = [];

  constructor(dictionary, table) {
    this.dictionary = dictionary;

    if (table) {
      this.table = table;
      return;
    }

    for (const cell of this.dictionary) {
      const { rowIndex, columnIndex } = cell;

      if (!this.table[rowIndex]) {
        this.table[rowIndex] = [];
      }

      this.table[rowIndex][columnIndex] = cell;
    }
  }

  get leftDiagonal() {
    const diagonal = [];

    this.table.forEach((row, index) => diagonal.push(row[index]));

    return diagonal;
  }

  get rightDiagonal() {
    const diagonal = [];

    const lastIndex = this.table.length - 1;
    let index = lastIndex;
    this.table.forEach((row) => {
      diagonal.push(row[index]);
      index--;
    });

    return diagonal;
  }

  getDiagonal = (rowIndex, columnIndex) => {
    const size = this.table.length;
    const hasDiagonals = size % 2 !== 0;

    if (!hasDiagonals) {
      return null;
    }

    const isLeftDiagonal = rowIndex === columnIndex;

    if (isLeftDiagonal) {
      return this.leftDiagonal;
    }

    const lastIndex = size - 1;
    const isRightDiagonal = rowIndex + columnIndex === lastIndex;

    if (isRightDiagonal) {
      return this.rightDiagonal;
    }

    return null;
  };

  getColumn = (columnIndex) => {
    const column = [];

    this.table.forEach((row) => column.push(row[columnIndex]));

    return column;
  };

  toggleCell = (rowIndex, columnIndex) => {
    const row = this.table[rowIndex];
    const prevCell = row[columnIndex];
    const newCell = prevCell.copyWith({
      selected: !prevCell.selected,
    });
    const newRow = [...row];
    newRow[columnIndex] = newCell;
    const newTable = [...this.table];
    newTable[rowIndex] = newRow;

    return this.copyWith({ table: newTable });
  };

  rowIsFull = (rowIndex) => every(this.table[rowIndex], ["selected", true]);
  columnIsFull = (columnIndex) =>
    every(this.getColumn(columnIndex), ["selected", true]);
  diagonalIsFull = (rowIndex, columnIndex) => {
    const diagonal = this.getDiagonal(rowIndex, columnIndex);

    if (!diagonal) {
      return false;
    }

    return every(diagonal, ["selected", true]);
  };

  gameIsFinish = (rowIndex, columnIndex) =>
    this.rowIsFull(rowIndex) ||
    this.columnIsFull(columnIndex) ||
    this.diagonalIsFull(rowIndex, columnIndex);

  copyWith = ({ dictionary, table } = {}) =>
    new BoardData(dictionary ?? this.dictionary, table ?? this.table);
}

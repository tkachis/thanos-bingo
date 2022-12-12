export default class CellData {
  constructor(text, selected, rowIndex, columnIndex) {
    this.text = text;
    this.selected = selected;
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
  }

  copyWith = ({ selected } = {}) =>
    new CellData(
      this.text,
      selected ?? this.selected,
      this.rowIndex,
      this.columnIndex
    );
}

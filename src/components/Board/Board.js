import React, { Fragment } from "react";
import classNames from "classnames/bind";

import { useBoardTable } from "hooks";

import { Row, Thanos, WinnerText } from "./components";
import styles from "./styles.module.css";

const cn = classNames.bind(styles);

const Board = ({ className, dictionary }) => {
  const { board, finish, onSelect } = useBoardTable(dictionary);

  return (
    <Fragment>
      <WinnerText finish={finish} />
      <Thanos finish={finish} />
      <table className={cn("board", className)}>
        <tbody>
          {board.table.map((elements, index) => (
            <Row key={index} elements={elements} onSelectCell={onSelect} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Board;

import React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.css";

const cn = classNames.bind(styles);

const GameLayout = ({ className, children }) => {
  return <div className={cn("game-layout", className)}>{children}</div>;
};

export default GameLayout;

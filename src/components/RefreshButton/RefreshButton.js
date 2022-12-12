import React from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.css";

const cn = classNames.bind(styles);

const RefreshButton = ({ className, onClick }) => {
  return (
    <button className={cn("refresh-button", className)} onClick={onClick}>
      REFRESH
    </button>
  );
};

export default RefreshButton;

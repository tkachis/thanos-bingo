import React from "react";
import classNames from "classnames/bind";

import thanosGif from "assets/thanos.gif";
import styles from "./styles.module.css";

const cn = classNames.bind(styles);

const Thanos = ({ className, finish }) => {
  return (
    <img
      className={cn("thanos", { "thanos--shown": finish }, className)}
      src={thanosGif}
      alt="Dancing Thanos"
    />
  );
};

export default Thanos;

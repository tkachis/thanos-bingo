import React from "react";
import classNames from "classnames/bind";
import GlitchClip from "react-glitch-effect/core/GlitchClip";

import styles from "./styles.module.css";

const cn = classNames.bind(styles);

const WinnerText = ({ className, finish }) => (
  <div className={cn("winner", { "winner--shown": finish }, className)}>
    <GlitchClip>
      <h1>YOU ARE WINNER!!!</h1>
    </GlitchClip>
  </div>
);

export default WinnerText;

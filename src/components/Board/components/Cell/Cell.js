import React, { memo } from "react";
import classNames from "classnames/bind";
import GlitchClip from "react-glitch-effect/core/GlitchClip";

import selectSound from "assets/select-sound.mp3";

import StoneImage from "./StoneImage";
import styles from "./styles.module.css";

const cn = classNames.bind(styles);
const audio = new Audio(selectSound);

const Cell = ({ className, onSelect, data }) => {
  const { text, selected } = data;

  const handleClick = () => {
    const isCentral = data.text === "";

    if (isCentral) {
      return;
    }

    if (!selected) {
      audio.play();
    }

    onSelect(data);
  };

  return (
    <td
      className={cn("cell", { "cell--selected": selected }, className)}
      onClick={handleClick}
    >
      {selected ? (
        <GlitchClip iterationCount="1">
          <StoneImage />
        </GlitchClip>
      ) : (
        <p>{text}</p>
      )}
    </td>
  );
};

export default memo(Cell);

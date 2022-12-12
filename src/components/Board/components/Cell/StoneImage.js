import React from "react";

import stoneOne from "assets/stone1.png";
import stoneTwo from "assets/stone2.png";
import stoneThree from "assets/stone3.png";
import stoneFour from "assets/stone4.png";
import stoneFive from "assets/stone5.png";

export const STONES = [stoneOne, stoneTwo, stoneThree, stoneFour, stoneFive];

const StoneImage = () => {
  const randomImgIndex = Math.floor(Math.random() * STONES.length);

  return <img src={STONES[randomImgIndex]} alt={`stone-${randomImgIndex}`} />;
};

export default StoneImage;

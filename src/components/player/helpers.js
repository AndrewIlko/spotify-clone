import { volumeSvg } from "../../svg/svgs";

export const volumeLevel = (volume) => {
  if (volume >= 0.66) {
    return volumeSvg.maxVolume;
  }
  if (volume >= 0.33) {
    return volumeSvg.mediumVolume;
  }
  if (volume > 0) {
    return volumeSvg.lowVolume;
  }
  return volumeSvg.noVolume;
};

export const convertTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
};

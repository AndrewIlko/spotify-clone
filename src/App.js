import "./styles/dist/style.css";
import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";
import { Slider, Paper, Button, Typography } from "@mui/material";
import songItem from "./music-files/tearsInTheRain.mp3";
import React, { useEffect, useMemo, useRef, useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import RepeatOneRoundedIcon from "@mui/icons-material/RepeatOneRounded";
import { volumeSvg } from "./svg/svgs";

function App() {
  const [volume, setVolume] = useState(0.25);
  const [currentTime, setCurrentTime] = useState(0);
  const [repeat, setRepeat] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const song = useRef();

  useEffect(() => {
    if (isPlaying) {
      song.current.play();
    } else {
      song.current.pause();
    }
  }, [isPlaying]);

  const changeParameters = () => {
    if (!isSelected) {
      setCurrentTime((song.current.currentTime * 100) / song.current.duration);
    }
    if (currentTime >= 99.8) {
      if (repeat == 2) {
        setRepeat(0);
      }
    }
  };
  useEffect(() => {
    if (repeat != 0) {
      song.current.loop = true;
    } else {
      song.current.loop = false;
    }
    song.current.volume = 0.1;
  }, [repeat]);

  useEffect(() => {
    song.current.volume = volume;
  }, [volume]);

  const convertTime = (time) => {
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
  const volumeLevel = (volume) => {
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
  return (
    <>
      <Paper
        style={{
          padding: "0 16px",
          height: "90px",
          width: "100%",
          position: "fixed",
          bottom: "0",
          backgroundColor: "#181818",
          display: "flex",
        }}
        elevation={0}
        square
      >
        <Paper
          style={{
            minWidth: "180px",
            width: "30%",
            backgroundColor: "transparent",
          }}
          elevation={0}
          square
        ></Paper>
        <Paper
          style={{
            maxWidth: "722px",
            width: "40%",
            backgroundColor: "transparent",
          }}
          elevation={0}
          square
        >
          <div className="music-player">
            <div className="music-controls">
              <div className="music-controls__left">
                <Button
                  disableElevation
                  variant="contained"
                  style={{
                    backgroundColor: "transparent",
                    minWidth: "32px",
                    width: "32px",
                    padding: "0",
                  }}
                >
                  <SkipPreviousRoundedIcon
                    style={{ transform: "scale(1.3335)" }}
                  />
                </Button>
              </div>
              <Button
                variant="contained"
                style={{
                  minWidth: "32px",
                  width: "32px",
                  height: "32px",
                  padding: 0,
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                }}
                onClick={() => {
                  setIsPlaying(!isPlaying);
                }}
              >
                {isPlaying ? (
                  <PauseRoundedIcon style={{ fill: "black" }} />
                ) : (
                  <PlayArrowRoundedIcon style={{ fill: "black" }} />
                )}
              </Button>
              <div className="music-controls__right">
                <Button
                  disableElevation
                  variant="contained"
                  style={{
                    backgroundColor: "transparent",
                    minWidth: "32px",
                    width: "32px",
                    padding: "0",
                    "&:hover": { backgroundColor: "#fff" },
                  }}
                >
                  <SkipNextRoundedIcon style={{ transform: "scale(1.3335)" }} />
                </Button>
                <Button
                  disableElevation
                  variant="contained"
                  style={{
                    backgroundColor: "transparent",
                    minWidth: "32px",
                    width: "32px",
                    padding: "0",
                    "&:hover": { backgroundColor: "#fff" },
                  }}
                  onClick={() => {
                    if (repeat == 2) {
                      setRepeat(0);
                    } else {
                      setRepeat((prev) => prev + 1);
                    }
                  }}
                >
                  {repeat == 1 ? (
                    <RepeatRoundedIcon style={{ fill: "#1db954" }} />
                  ) : repeat == 2 ? (
                    <RepeatOneRoundedIcon style={{ fill: "#1db954" }} />
                  ) : (
                    <RepeatRoundedIcon />
                  )}
                </Button>
              </div>
            </div>
            <div className="playbar__wrapper">
              <div className="playbar__time" style={{ textAlign: "right" }}>
                {song?.current?.duration != undefined &&
                  convertTime(currentTime * (song.current.duration / 100))}
              </div>
              <Slider
                style={{ width: "100%", padding: "5px 0" }}
                value={currentTime}
                sx={{
                  "& .MuiSlider-track": {
                    backgroundColor: "#fff",
                    border: "none",
                  },
                  "&:hover .MuiSlider-track": {
                    backgroundColor: "#1db954",
                  },
                  "	.MuiSlider-rail": {
                    backgroundColor: "#fff",
                  },
                  "& .MuiSlider-thumb": {
                    width: 0,
                    height: 0,
                    color: "#fff",
                    "&::after": {
                      width: "12px",
                      height: "12px",
                    },
                  },
                  "&:hover .MuiSlider-thumb": {
                    width: 12,
                    height: 12,
                    boxShadow: "none",
                  },
                }}
                onClick={(e) => {
                  setIsSelected(false);
                  song.current.currentTime =
                    currentTime * (song.current.duration / 100);
                }}
                onChange={(e) => {
                  setIsSelected(true);
                  setCurrentTime(e.target.value);
                }}
              />
              <div className="playbar__time">
                {song?.current?.duration != undefined &&
                  convertTime(song.current.duration)}
              </div>
            </div>
            <audio src={songItem} ref={song} onTimeUpdate={changeParameters} />
          </div>
        </Paper>
        <Paper
          style={{
            minWidth: "180px",
            width: "30%",
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          elevation={0}
          square
        >
          <div className="volume-controls">
            <div
              className="volume-controls__number"
              onClick={() => {
                setIsMuted(!isMuted);
                if (isMuted) {
                  song.current.volume = volume;
                } else {
                  song.current.volume = 0;
                }
              }}
            >
              {isMuted ? volumeLevel(0) : volumeLevel(volume)}
            </div>
            <Slider
              value={isMuted ? 0 : volume * 100}
              style={{ width: "93px", padding: "5px 0" }}
              sx={{
                "& .MuiSlider-track": {
                  backgroundColor: "#fff",
                  border: "none",
                },
                "&:hover .MuiSlider-track": {
                  backgroundColor: "#1db954",
                },
                "	.MuiSlider-rail": {
                  backgroundColor: "#fff",
                },
                "& .MuiSlider-thumb": {
                  width: 0,
                  height: 0,
                  color: "#fff",
                },
                "&:hover .MuiSlider-thumb": {
                  width: 12,
                  height: 12,
                  boxShadow: "none",
                },
              }}
              onChange={(e) => {
                setIsMuted(false);
                setVolume(e.target.value / 100);
              }}
            />
          </div>
        </Paper>
      </Paper>
    </>
  );
}

export default App;

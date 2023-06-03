import { Slider, Paper, Button, Typography } from "@mui/material";
import songItem2 from "../../music-files/worthNothing.mp3";
import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import RepeatOneRoundedIcon from "@mui/icons-material/RepeatOneRounded";

import PlayerSongDetails from "../PlayerSongDetails";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../redux/store/features/globalSlice";
import VolumeSettings from "./VolumeSettings";
import Timer from "./Timer";

const PlayerControls = () => {
  const { volume, isMuted, selectedSong, isPlaying, repeat } = useSelector(
    (state) => state.global
  );
  console.log(repeat);

  const { setVolume, setIsMuted, setIsPlaying, setRepeat } = globalActions;
  const dispatch = useDispatch();

  const [currentTime, setCurrentTime] = useState(0);
  console.log(currentTime);

  const [isSelected, setIsSelected] = useState(false);
  const song = useRef();

  const changeParameters = () => {
    if (!isSelected) {
      setCurrentTime((song.current.currentTime * 100) / song.current.duration);
    }
    if (currentTime >= 99.8) {
      if (repeat == -1) {
        dispatch(setRepeat(0));
      }
    }
  };

  useEffect(() => {
    if (repeat != 0) {
      song.current.loop = true;
    } else {
      song.current.loop = false;
    }
  }, [repeat]);

  useEffect(() => {
    song.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (isPlaying) {
      song.current.play();
    } else {
      song.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <div
        className="rounded-[6px]"
        style={{
          padding: "0 16px",
          height: "90px",
          width: "100%",
          backgroundColor: "#000",
          display: "flex",
        }}
      >
        {selectedSong ? (
          <>
            <PlayerSongDetails />
          </>
        ) : (
          <div className="w-[30%]" />
        )}
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
                  dispatch(setIsPlaying(!isPlaying));
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
                    if (repeat == 0) {
                      dispatch(setRepeat(1));
                    }
                    if (repeat == 1) {
                      dispatch(setRepeat(-1));
                    }
                    if (repeat == -1) {
                      dispatch(setRepeat(0));
                    }
                  }}
                >
                  {repeat == 1 ? (
                    <RepeatRoundedIcon style={{ fill: "#1db954" }} />
                  ) : repeat == -1 ? (
                    <RepeatOneRoundedIcon style={{ fill: "#1db954" }} />
                  ) : (
                    <RepeatRoundedIcon />
                  )}
                </Button>
              </div>
            </div>
            <div className="playbar__wrapper">
              {song && song.current && (
                <>
                  <Timer time={currentTime * (song.current.duration / 100)} />
                </>
              )}
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
              {song && song.current && (
                <>
                  <Timer time={song.current.duration} />
                </>
              )}
            </div>
            <audio
              src={selectedSong}
              ref={song}
              onTimeUpdate={changeParameters}
            />
          </div>
        </Paper>
        <div className="w-[30%] bg-transparent flex items-center justify-end">
          <VolumeSettings song={song} />
        </div>
      </div>
    </>
  );
};

export default PlayerControls;

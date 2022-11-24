import "./styles/style.css";
import ReactPlayer from "react-player";
import AudioPlayer from "react-h5-audio-player";
import { Slider, Paper, Button, Typography } from "@mui/material";
import songItem from "./music-files/tearsInTheRain.mp3";
import React, { useEffect, useMemo, useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

function App() {
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
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
          <Paper
            elevation={0}
            square
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
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
                <PauseIcon style={{ color: "black" }} />
              ) : (
                <PlayArrowIcon style={{ color: "black" }} />
              )}
            </Button>
            <Slider
              style={{ width: "100%" }}
              value={currentTime}
              sx={{
                "	.MuiSlider-rail": {
                  backgroundColor: "#fff",
                },
                "& .MuiSlider-thumb": {
                  width: 0,
                  height: 0,
                  boxShadow: "none",
                },
                "&:hover .MuiSlider-thumb": {
                  width: 10,
                  height: 10,
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
            <audio src={songItem} ref={song} onTimeUpdate={changeParameters} />
          </Paper>
        </Paper>
        <Paper
          style={{
            minWidth: "180px",
            width: "30%",
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "flex-end",
          }}
          elevation={0}
          square
        >
          <Slider
            step={1}
            sx={{
              width: "93px",
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
              },
            }}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </Paper>
      </Paper>
    </>
  );
}

export default App;

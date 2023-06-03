import { createSlice } from "@reduxjs/toolkit";
import song from "../../../music-files/tearsInTheRain.mp3";

const initialState = {
  volume: 0.5,
  isMuted: false,
  selectedSong: song,
  repeat: 0,
  isPlaying: false,
};

const globalSlice = createSlice({
  name: "global-slice",
  initialState,
  reducers: {
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setIsMuted: (state, action) => {
      state.isMuted = action.payload;
    },
    setSelectedSong: (state, action) => {
      state.selectedSong = action.payload;
    },
    setRepeat: (state, action) => {
      state.repeat = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const globalActions = globalSlice.actions;
export const globalReducer = globalSlice.reducer;

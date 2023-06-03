import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../redux/store/features/globalSlice";
import { volumeLevel } from "./helpers";
import { Slider } from "@mui/material";

const VolumeSettings = (props) => {
  const { song } = props;

  const { isMuted, volume } = useSelector((state) => state.global);
  const { setIsMuted, setVolume } = globalActions;
  const dispatch = useDispatch();

  return (
    <>
      <div className="volume-controls">
        <div
          className="volume-controls__number"
          onClick={() => {
            dispatch(setIsMuted(!isMuted));
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
            dispatch(setIsMuted(false));
            dispatch(setVolume(e.target.value / 100));
          }}
        />
      </div>
    </>
  );
};

export default VolumeSettings;

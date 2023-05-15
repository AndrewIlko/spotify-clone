import { Paper } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import React, { useState } from "react";



const PlayerSongDetails = () => {
  const [img, setImg] = useState(
    "https://i.scdn.co/image/ab67616d0000485188367cde4312ea2b32225e1b"
  );
  return (
    <Paper
      style={{
        minWidth: "180px",
        width: "30%",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
      }}
      elevation={0}
      square
    >
      <div className="about-song text-white">
        <img src={img} />
        <div className="about-song__text-info">
          <div className="text-sm">Miss You</div>
          <div className="text-[11px] text-[#b3b3b3b3] font-medium">
            Oliver Tree, Robin Schultz
          </div>
        </div>
        <FavoriteBorderOutlinedIcon
          style={{ transform: "scale(0.8)", marginLeft: "5px" }}
        />
      </div>
    </Paper>
  );
};

export default PlayerSongDetails;

import { Dialog, IconButton, Slide, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import ExploreGrid from "./ExploreGrid";
import { Box } from "@mui/material";
import { React, useState } from "react";

function Explore() {
  let [display, setDisplay] = useState(true);
  const handle = () => {
    setDisplay((prev) => (display = !prev));
  };
  return (
    <Box>
      <IconButton aria-label="down" sx={{ flexGrow: 0 }} onClick={handle}>
        <Typography variant="body1" color="secondary">
          Explore
        </Typography>
        <KeyboardArrowDown></KeyboardArrowDown>
      </IconButton>
      {/* <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        {React.forwardRef((props, ref) => (
          <ExploreGrid ref={ref} {...props} />
        ))}
      </Slide> */}
    </Box>
  );
}
export default Explore;

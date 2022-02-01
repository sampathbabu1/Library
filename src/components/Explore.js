import { IconButton, Typography } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
function Explore() {
  return (
    <IconButton aria-label="down" sx={{ flexGrow: 0 }}>
      {/* <Button variant="text" color="secondary"> */}
      <Typography variant="subtitle2" color="secondary"> Explore</Typography>
      {/* </Button> */}
      <KeyboardArrowDown></KeyboardArrowDown>
    </IconButton>

  );
}
export default Explore;

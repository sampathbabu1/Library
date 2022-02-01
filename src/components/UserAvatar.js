import { IconButton, Avatar } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
function UserAvatar() {
  return (
    <IconButton sx={{ position: "absolute", right: 0 }}>
      <Avatar sx={{ bgcolor: "#c6daf6" }}>A</Avatar>
      <KeyboardArrowDown></KeyboardArrowDown>
    </IconButton>
  );
}
export default UserAvatar;

import { AppBar, Box } from "@mui/material";
import { Toolbar, Button } from "@mui/material";
import SearchIcon from "./components/Search";
import Explore from "./components/Explore";
import Library from "./components/Library";
import UserAvatar from "./components/UserAvatar";
import Lower from "./components/Lower";
import DividerPrimary from "./components/DividerPrimary";

function Tex() {
  // let [toggle, setToggle] = useState(false);
  const handle = () => {
    console.log("handle");
    // setToggle((prev) => (toggle = !prev));
  };
  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <Box sx={{flexGrow:0.25}}>
          <Button variant="contained">BlinkIst</Button>
          </Box>
          <SearchIcon></SearchIcon>
          <Explore></Explore>
          <Library></Library>
          <UserAvatar></UserAvatar>
        </Toolbar>
      </AppBar>
      <Lower active=""></Lower>
    <DividerPrimary></DividerPrimary>
      {/* <Switch checked={toggle} onClick={handle}></Switch>
      {toggle ? <div>hello</div> : <div>null</div>} */}
    </>
  );
}
export default Tex;

import { SvgIcon } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import Explore from "../components/Explore";
import ExploreGrid from "../components/ExploreGrid";
import { theme } from "../index";
import {ReactComponent as Te} from "../Assets/BookCovers/1.svg";
import Home from "../components/Home";
import SearchBar from "../components/SearchBar";
export default {
  title: "Grid",
  component: SearchBar,
};

export const Primary = () => (
  <ThemeProvider theme={theme}>
      {/* <Explore></Explore> */}
      <Home value="entre"/>
  </ThemeProvider>
);

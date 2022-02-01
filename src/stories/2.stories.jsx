import { ThemeProvider } from "@mui/styles";
import ExploreGrid from "../components/ExploreGrid";
import {theme} from "../index";
export default {
  title: "Grid",
  component: ExploreGrid,
};

export const Primary = () => (
  <ThemeProvider theme={theme}><ExploreGrid></ExploreGrid></ThemeProvider>
  
);

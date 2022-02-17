import CurrentlyReading from "./CurrentlyReading";
import {BrowserRouter} from "react-router-dom";
export default {
  title: "Currently reading",
  component: CurrentlyReading,
};
export const Primary = () => <BrowserRouter><CurrentlyReading /></BrowserRouter>;

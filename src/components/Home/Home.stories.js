import Home from "./Home";
import {BrowserRouter} from "react-router-dom";
export default{
    title:"Home ",
    component:Home
}
export const Primary = ()=> <BrowserRouter><Home /></BrowserRouter>
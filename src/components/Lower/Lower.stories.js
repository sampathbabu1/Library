import Lower from "./Lower";
import { BrowserRouter } from "react-router-dom";
export default{
    title:"My Library",
    component:Lower
};
export const Primary = ()=><BrowserRouter><Lower /></BrowserRouter>
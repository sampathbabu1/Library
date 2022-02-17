import { BrowserRouter } from "react-router-dom";
import FinishedBooks from "./FinishedBooks";
export default{
    title:"Finished Books",
    component:FinishedBooks
};
export const Primary = () => <BrowserRouter><FinishedBooks /></BrowserRouter>;
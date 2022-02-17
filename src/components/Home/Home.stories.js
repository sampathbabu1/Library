import Home from "./Home";
import {BrowserRouter} from "react-router-dom";
export default{
    title:"Home ",
    component:Home
}
export const Primary = ()=> <BrowserRouter><Home /></BrowserRouter>


// "test": "react-scripts test",


// "jest": {
//     "testEnvironment": "node",
//     "collectCoverage": true,
//     "testResultsProcessor": "jest-sonar-reporter",
//     "coveragePathIgnorePatterns": [
//       "/node_modules/",
//       "/test/"
//     ]
//   }
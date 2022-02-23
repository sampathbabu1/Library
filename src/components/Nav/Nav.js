import { Button, Box, Avatar, IconButton, Typography } from "@mui/material";
import {
  KeyboardArrowDown,
  Search,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { SearchContext,FilterContext } from "../Home/Home";
import { SearchContext,FilterContext } from "./Nav.test";
// import {SearchContext,FilterContext} from "./Nav.stories";
export default function Nav(props) {
  let [boolvalue, setBoolvalue] = useState(false);
  let [searchDisplay,setSearchDisplay]=useContext(SearchContext);
  let [filter,setFilter]=useContext(FilterContext);
  let [name, setName] = useState("home");
  let [displaybool, setDisplay] = useState(false);

  const handle = () => {
    setBoolvalue((prev) => !prev);
  };
  

  return (
    <Box m={2}>
      <Box
        display="flex"
        alignItems="center"
        textAlign="center"
        position="static"
      >
        <Link to="/">
        <IconButton onClick={() => setName("home")}>
          <Logo />
        </IconButton>
        </Link>
        <Box sx={{ marginX: 10 }}>
          <IconButton onClick={()=>setSearchDisplay((prev)=>!prev)}>
            <Search />
          </IconButton>
        </Box>
        <Box sx={{ marginX: 10 }}>
          <Button onClick={handle}>
            <Typography
              color="secondary"
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Explore{boolvalue ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{" "}
            </Typography>
          </Button>
        </Box>
        <Box sx={{ marginX: 10 }}>
          <Link to="/mylibrary" style={{textDecoration:'none'}}>
          <Button >
            <Typography color="secondary"> My Library </Typography>
          </Button>
          </Link>
        </Box>
        <Avatar sx={{ position: "relative", right: 0, marginRight: 3 }}>
          R
        </Avatar>
      </Box>
        <ExploreGrid bol={boolvalue} onClick={(value)=>{setFilter(value);}}></ExploreGrid>
    </Box>
  );
}



// "jest": {
//   "testEnvironment": "node",
//   "collectCoverage": true,
//   "testResultsProcessor": "jest-sonar-reporter",
//   "coveragePathIgnorePatterns": [
//     "/node_modules/",
//     "/test/"
//   ]
// }
import { Button, Box, Avatar, IconButton, Typography } from "@mui/material";
import {
  KeyboardArrowDown,
  Search,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import ExploreGrid from "./ExploreGrid";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext,FilterContext } from "./Home";
export default function Nav(props) {
  let [boolvalue, setBoolvalue] = useState(false);
  let [searchDisplay,setSearchDisplay]=useContext(SearchContext);
  let [filter,setFilter]=useContext(FilterContext);
  let [name, setName] = useState("home");
  let [displaybool, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay((prev) => !prev);
  };

  const handle = () => {
    setBoolvalue((prev) => !prev);
  };
  const handlefilter=(value)=>{
    setFilter(value);
    console.log(filter);
  }
  const handlelibrary = () => {
    setName("library");
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
        <Avatar sx={{ position: "absolute", right: 0, marginRight: 2 }}>
          R
        </Avatar>
      </Box>
      {/* <SearchContext.Provider value={displaybool}> */}
        <ExploreGrid bol={boolvalue} onClick={(value)=>{setFilter(value);}}></ExploreGrid>
        {/* {name === "library" ? <Lower active="" /> : <Home />} */}
      {/* </SearchContext.Provider> */}
    </Box>
  );
}


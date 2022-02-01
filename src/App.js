import { Button, Stack } from "@mui/material";
import { useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import "./App.css";
import { KeyboardArrowDown, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
function App() {
  const ref = useRef(null);
  const useTest = () => useState()[1];
  const handle = () => {
    console.log("onclick explore");
  };
  const clas = makeStyles({
    button: {
      "&hover": {
        backgroundColor: "#000",
        color: "fff",
      },
    },
  });
  const sty = clas();
  useTest();
  return (
    <Stack direction="row" spacing={5}>
      <Button variant="contained">BlinkIst</Button>
      <IconButton aria-label="delete" color="secondary">
        <Search></Search>
      </IconButton>
      <IconButton aria-label="down" onClick={handle}>
        <>
          <Button variant="text" color="secondary">
            Explore
          </Button>
          <KeyboardArrowDown></KeyboardArrowDown>
        </>
      </IconButton>
      <Button color="secondary">My Library</Button>
    </Stack>
  );
}

export default App;

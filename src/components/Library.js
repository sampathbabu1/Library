import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import DividerPrimary from "./DividerPrimary";
function Library() {
  return (
    <>
    <Button color="secondary" sx={{ flexGrow: 0.2 }}>
      My Library
    </Button>
    <DividerPrimary display="" color={useTheme().palette.primary.main}></DividerPrimary>
    </>
  );
}

export default Library;

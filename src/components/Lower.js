import { Button, Typography,Divider } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import BookCard from "./BookCard";
import { Box } from "@mui/system";
function Lower(props) {
  let [first, setFirst] = useState("primary");
  let [second, setSecond] = useState("secondary");

  console.log(first);
  return (
    <Box sx={{display:props.active,m:2}}>
    <Typography variant="h6">
      My Library
    </Typography>
      <Stack direction="row" spacing={3}>
        <Stack direction="column">
        <Button
          variant="text"
          color={first}
          onClick={() => {
            console.log(first);
            setFirst("primary");
            setSecond("secondary");
          }}
        >
          Currently Reading
        </Button>
        <Divider sx={{backgroundColor:'primary.main',display:(first=='primary')?"":'none'}}></Divider>
        </Stack>
        <Stack direction="column">
        <Button
          variant="text"
          color={second}
          onClick={() => {
            setFirst("secondary");
            setSecond("primary");
          }}
        >
          Finished
        </Button>
        <Divider sx={{backgroundColor:'primary.main',display:(first=='secondary')?"":'none'}}></Divider>
        </Stack>
      </Stack>
      {first == "primary" ? (
          <Stack direction="row">
        <BookCard
          title="Beyond Entrepreneurship"
          author="Jim Collins & Bill Lazier"
          duration="13-minute read"
        ></BookCard>
        <BookCard
          title="Beyond Entrepreneurship"
          author="Jim Collins & Bill Lazier"
          duration="13-minute read"
        ></BookCard>
        </Stack>
      ) : (
        <div>Finished</div>
      )}
    </Box>
  );
}
//color={toggle?theme.palette.primary.main:theme.palette.custom.main}
//color={toggle?theme.palette.custom.main:theme.palette.primary.main}
export default Lower;

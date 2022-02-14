import { Typography, Box, Grid } from "@mui/material";
import BookCard from "../BookCard/BookCard";
import db from "../../data.json";
import { useEffect, useState } from "react";
export default function CurrentlyReading(props) {
  let [data,setData]=useState([]);
  useEffect(()=>{
    if(localStorage.getItem('title')) setData(JSON.parse(localStorage.getItem('title')))
  },[]);
  if (
    !localStorage.getItem("title")||
    JSON.parse(localStorage.getItem("title")).length === 0
  ) {
    return (
      <Box height={1}>
        <Typography>No Currently Reading books...</Typography>
      </Box>
    );
  } else {
    return (
      <Box m={0}>
        <Grid container spacing={2}>
          {data.map((value, index) => (
            <Grid item xs={3} key={value}>
              <BookCard
                buttontitle={"Finished!"}
                index={value}
                currentmanage={(array)=>setData(array)}
                category={"finished"}
                author={db["books"][value][value + 1].author}
                title={db["books"][value][value + 1].title}
                duration="13-minute read"
                url={db['books'][value][value+1].url}
              ></BookCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

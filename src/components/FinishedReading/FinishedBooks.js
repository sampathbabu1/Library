import { Typography, Box, Grid } from "@mui/material";
import BookCard from "../BookCard/BookCard";
import db from "../../data.json";
import {useState,useEffect} from 'react';
export default function FinishedBooks(props) {
    let [data,setData]=useState([]);
    useEffect(()=>{
      if(localStorage.getItem('finished')) setData(JSON.parse(localStorage.getItem('finished')))
    },[]);
  if (!localStorage.getItem("finished") || data.length===0) {
    return (
      <Box height={1}>
        <Typography>No Finished Books</Typography>
      </Box>
    );
  } else {
      data=JSON.parse(localStorage.getItem('finished'))
    return (
        <Box m={0}>
      <Grid container spacing={2}>
        {data.map((value, index) => (
          <Grid item xs={3} key={value}>
            <BookCard
              buttontitle={"Read Again"}
              index={value}
              finishmanage={(array)=>setData(array)}
              category={"title"}
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

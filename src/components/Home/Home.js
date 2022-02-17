import { Container, Grid } from "@mui/material";
import db from "../../data.json";
import BookCard from "../BookCard/BookCard";
import SearchBar from "../SearchBar/SearchBar";
import React, { useState } from "react";
import Nav from "../Nav/Nav";
import {Typography} from "@mui/material";
let SearchContext;
let FilterContext;
export default function Home(props) {
  let [search, setSearch] = useState("");
  let filterType = useState("");
  FilterContext = React.createContext(filterType);
  // console.log(db);
  let searchDisplay = useState(false);
  SearchContext = React.createContext(searchDisplay);
  const handlefilter = (value) => {
    setSearch(value.target.value);
  };
  return (
    <SearchContext.Provider value={searchDisplay}>
      <FilterContext.Provider value={filterType}>
        <Nav />
        <Container sx={{ display: searchDisplay[0] ? "block" : "none" ,width:1,marginY:5,marginX:3}}>
          <SearchBar value={search} handleinput={handlefilter}></SearchBar>
        </Container>
        <Container>
          <Typography fontWeight={'bold'} fontSize={20}>
          {
            (filterType[0].length>0)?filterType[0]:"Trending"
          }
          </Typography>
          <Grid container spacing={2}>
            {db["books"].map((value, index) =>
              (value[index + 1].title.includes(search) ||
                value[index + 1].author.includes(search)) &&
              (value[index + 1].type.includes(filterType[0])) ? (
                <Grid item xs={4} key={value[index + 1].title}>
                  <BookCard
                    index={index}
                    alt={`${index}`}
                    category="title"
                    title={value[index + 1].title}
                    author={value[index + 1].author}
                    duration="13-minute read"
                    buttontitle="Read book"
                    type="Home"
                    url={value[index+1].url}
                  ></BookCard>
                </Grid>
              ) : (
                ""
              )
            )}
          </Grid>
        </Container>
      </FilterContext.Provider>
    </SearchContext.Provider>
  );
}

export { SearchContext, FilterContext };

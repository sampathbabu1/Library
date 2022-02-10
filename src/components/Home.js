import { Container, Grid } from "@mui/material";
import db from "../data.json";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import React, {  useState } from "react";
import Nav from "./AppBar";
let SearchContext;
let FilterContext;
export default function Home(props) {
  let [search, setSearch] = useState("");
  let filterType = useState("");
  FilterContext = React.createContext(filterType);
  // let [searchOnClick,setSearchOnClick]=useState(false);
  console.log(db);
  let searchDisplay = useState(false);
  SearchContext = React.createContext(searchDisplay);
  // const handle=()=>{
  //   setSearchOnClick((prev)=>!prev)
  // }

  // let searchdisplay = useContext(SearchContext);
  const handlefilter = (value) => {
    setSearch(value.target.value);
  };
  return (
    <SearchContext.Provider value={searchDisplay}>
      <FilterContext.Provider value={filterType}>
        <Nav />
        <Container sx={{ display: searchDisplay[0] ? "flex" : "none" }}>
          <SearchBar width={0.75} handleinput={handlefilter}></SearchBar>
        </Container>
        <Container>
          <Grid container spacing={2}>
            {db["books"].map((value, index) =>
              (value[index + 1].title.includes(search) ||
                value[index + 1].author.includes(search)) &&
              value[index + 1].type.includes(filterType[0]) ? (
                <Grid item xs={4}>
                  <BookCard
                    index={index}
                    category="title"
                    key={value[index + 1].title}
                    title={value[index + 1].title}
                    author={value[index + 1].author}
                    duration="13-minute read"
                    buttontitle="Read book"
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

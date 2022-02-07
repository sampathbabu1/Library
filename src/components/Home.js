import { Container, Grid, Paper } from "@mui/material";
import db from "../data.json";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
export default function Home(props) {
  console.log(db);
  const handlefilter = (value) => {
    if (value.includes(props.value)) return true;
    else return false;
  };
  return (
    <>
      <SearchBar></SearchBar>
      <Grid container spacing={2}>
        {db["books"].map((value, index) =>
        //   handlefilter(value[index + 1].title) ||
        //   handlefilter(value[index + 1].author) ? (
            <Grid item xs={4}>
              <BookCard
                title={value[index + 1].title}
                author={value[index + 1].author}
                duration="13-minute read"
              ></BookCard>
            </Grid>
        //   ) : (
        //     <></>
        //   )
        )}
      </Grid>
    </>
  );
}

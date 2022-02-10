import { AccessTime } from "@mui/icons-material";
import { Button, Typography, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";
function BookCard(props) {
  const local = (category) => {
    if (!localStorage.getItem(category)) {
      let a = [props.index];
      localStorage.setItem(category, JSON.stringify(a));
    } else {
      let a = JSON.parse(localStorage.getItem(category));
      if (!a.includes(props.index)) {
        a.push(props.index);
        localStorage.setItem(category, JSON.stringify(a));
      }
    }
    if (category === "finished") {
      let a = JSON.parse(localStorage.getItem("title"));
      a.splice(a.indexOf(props.index), 1);
      localStorage.setItem("title", JSON.stringify(a));
      console.log(props);
      props.currentmanage(a);
    } else {
      let a = JSON.parse(localStorage.getItem("finished"));
      a.splice(a.indexOf(props.index), 1);
      console.log(props);
      localStorage.setItem("finished", JSON.stringify(a));
      props.finishmanage(a);
    }
  }
  return (
    <Paper sx={{ maxWidth: 270, m: 2, borderRadius: 3 }} elevation={3}>
      <Link to={`/${props.index}`}>
        <Box
          component="img"
          src={require(`../Assets/BookCovers/${parseInt(props.index)+1}.png`)}
          height="250px"
          width={270}
        ></Box>
      </Link>
      <Typography sx={{ fontWeight: "bold", m: 2 }}>{props.title}</Typography>
      <Typography sx={{ color: "grey", m: 2 }}>{props.author}</Typography>
      <Typography
        sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", m: 2 }}
      >
        <AccessTime sx={{ marginRight: 1 }} />
        {props.duration}
      </Typography>
      <Button
        variant="text"
        onClick={() => local(props.category)}
        sx={{ width: 270, color: "#0365f2" }}
      >
        {props.buttontitle}
      </Button>
    </Paper>
  );
}

export default BookCard;

import { AccessTime } from "@mui/icons-material";
import { Card, Button, CardContent, CardMedia, Typography, CardActions, Paper, SvgIcon } from "@mui/material";

function BookCard(props) {
  console.log(require("../Assets/BookCovers/1.svg"))
  return (
    <Paper sx={{ maxWidth: 270,m:2,borderRadius:3 }} elevation={3}>
      {/* <CardMedia
        component="img"
        height="250"
        image={require("./2.png")}
      ></CardMedia> */}
      {/* <SvgIcon component={}></SvgIcon> */}
      {/* {require("../Assets/BookCovers/1.svg")} */}
      {/* <CardContent> */}
        <Typography sx={{ fontWeight: "bold",m:2 }}>
            {props.title}
        </Typography>
        <Typography sx={{ color: "grey" ,m:2}}>
            {props.author}
        </Typography>
        <Typography
          sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" ,m:2}}
        >
          <AccessTime sx={{marginRight:1}} />
          {props.duration}
        </Typography>
      {/* </CardContent> */}
      {/* <CardActions> */}
          <Button variant="text"  sx={{width:270,color:'#0365f2'}}>Read again</Button>
      {/* </CardActions> */}
    </Paper>
  );
}

export default BookCard;

import { Timelapse } from "@mui/icons-material";
import { Card, Button, CardContent, CardMedia, Typography, CardActions } from "@mui/material";

function BookCard(props) {
  return (
    <Card sx={{ maxWidth: 270,m:2 }}>
      <CardMedia
        component="img"
        height="250"
        image={require("./2.png")}
      ></CardMedia>
      <CardContent>
        <Typography sx={{ fontWeight: "bold",m:0.5 }}>
            {props.title}
        </Typography>
        <Typography sx={{ color: "grey" ,m:0.5}}>
            {props.author}
        </Typography>
        <Typography
          sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" ,m:0.5}}
        >
          <Timelapse />
          {props.duration}
        </Typography>
      </CardContent>
      <CardActions>
          <Button variant="text"  sx={{width:270,color:'#0365f2'}}>Read again</Button>
      </CardActions>
    </Card>
  );
}

export default BookCard;

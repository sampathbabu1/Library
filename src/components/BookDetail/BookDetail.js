import { AccessTime, ArrowForward } from "@mui/icons-material";
import { Box, Typography, Button, Tabs, Tab, Grid } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function getData(index) {
  let db = require("../../data.json");
  console.log(typeof index);
  console.log(db.books[index][parseInt(index) + 1]);
  const author = db.books[index][parseInt(index) + 1].author;
  const booktitle = db.books[index][parseInt(index) + 1].title;
  const content = db.books[index][parseInt(index) + 1].content;
  const url = db.books[index][parseInt(index) + 1].url;
  return [author, booktitle, content, url];
}
export default function BookDetail(props) {
  let [value, setValue] = useState(0);
  const handle = (event, newValue) => {
    setValue(newValue);
  };
  const index = useParams().id ?? props.id ?? 0;
  console.log(index);
  const setReadorFinish = (index, category) => {
    if (!localStorage.getItem(category)) {
      localStorage.setItem(category, JSON.stringify([index]));
    } else {
      let a = JSON.parse(localStorage.getItem(category));

      if (!a.includes(index)) {
        a.push(index);
        localStorage.setItem(category, JSON.stringify(a));
      }
    }
    if (category === "finished" && localStorage.getItem("title")) {
      let a = JSON.parse(localStorage.getItem("title"));
      a.splice(a.indexOf(index), 1);
      localStorage.setItem("title", JSON.stringify(a));
    } else if (localStorage.getItem("finished")) {
      let a = JSON.parse(localStorage.getItem("finished"));
      if (a.indexOf(index) != -1) {
        a.splice(a.indexOf(index), 1);
      }
      localStorage.setItem("finished", JSON.stringify(a));
    }
  };
  const [author, title, content, url] = getData(index);
  function propsother(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      {/* <Nav /> */}
      <Box m={4}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box height={600}>
              <Typography variant="body2" sx={{ marginY: 3 }}>
                Get the key ideas from
              </Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                {title}
              </Typography>
              <Typography variant="body1" sx={{ marginY: 2 }}>
                Turning Your Business into an Enduring Great Company
              </Typography>
              <Typography>By {author}</Typography>
              <Box display={"flex"} marginY={2}>
                <AccessTime></AccessTime>
                <Typography display={"inline"} marginLeft={1}>
                  15-minute read
                </Typography>
              </Box>
              <Box marginY={10}>
                <Button
                  color="primary"
                  onClick={() => {
                    setReadorFinish(parseInt(index), "title");
                  }}
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color:'black',
                    border: 1,
                    display: "inline",
                  }}
                >
                  <Typography>Read now</Typography>
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{ display: "inline", marginX: 2 }}
                  onClick={() => {
                    setReadorFinish(parseInt(index), "finished");
                  }}
                >
                  <Typography>Finished Reading</Typography>
                </Button>
                <Button
                  color="secondary"
                  variant="text"
                  sx={{ display: "inline-flex" }}
                >
                  <Typography>Send to Kindle </Typography>
                  <ArrowForward sx={{ marginLeft: 1 }} />
                </Button>
              </Box>
              <Tabs value={value} onChange={handle}>
                <Tab
                  label="Synopsis"
                  {...propsother(0)}
                  sx={{ width: 1 / 4 }}
                />
                <Tab
                  label="Who is it for?"
                  {...propsother(1)}
                  sx={{ width: 1 / 4 }}
                />
                <Tab
                  label="About the author"
                  {...propsother(2)}
                  sx={{ width: 1 / 4 }}
                />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Typography>
                  Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and
                  Bill Lazier’s essential 1992 business handbook, Beyond
                  Entrepreneurship for the entrepreneurs, visionaries, and
                  innovators of today. This new edition combines the timeless
                  business advice and strategy of the original text,
                  supplemented with cutting-edge insights and case studies
                  pertinent to today’s business world.
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography>For Startup Enthusiasts....</Typography>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography>{author}</Typography>
              </TabPanel>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={1}
            >
              <Box
                component={"img"}
                src={require(`../../Assets/BookCovers/${
                  parseInt(index) + 1
                }.png`)}
                width={300}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

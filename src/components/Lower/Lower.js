import {  Typography } from "@mui/material";
import { useState } from "react";
import { Box,Tabs,Tab } from "@mui/material";
import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import FinishedBooks from "../FinishedReading/FinishedBooks";
import Nav from "../Nav/Nav";
function Lower(props) {
  let [value,setValue]=useState(0);
  const handleChange=(event,newValue)=>{
    setValue(newValue);
  }
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
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box>
      {/* <Nav /> */}
    <Box marginLeft={3}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Currently Reading" {...a11yProps(0)} sx={{fontWeight:"bold",fontSize:16}}/>
        <Tab label="Finished" {...a11yProps(1)} sx={{fontWeight:"bold",fontSize:16}}/>
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
        <CurrentlyReading />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FinishedBooks />
      </TabPanel>
    </Box>
  );
}
//color={toggle?theme.palette.primary.main:theme.palette.custom.main}
//color={toggle?theme.palette.custom.main:theme.palette.primary.main}
export default Lower;

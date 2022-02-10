import { Search } from "@mui/icons-material";
import {Box, FormControl,Input, InputAdornment} from "@mui/material";
export default function SearchBar(props){
  
    return (
        <Box {...props}>
        <FormControl variant="standard">
            <Input value={props.value} autoFocus={true} fullWidth={true} startAdornment={
                <InputAdornment position="start">
                    <Search></Search>
                </InputAdornment>
            } placeholder="Search by title or author" onChange={props.handleinput}/>
        </FormControl>
        </Box>
    );
}
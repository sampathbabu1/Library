import { Search } from "@mui/icons-material";
import {Box, FormControl,Input, InputAdornment} from "@mui/material";
export default function SearchBar(props){
  
    return (
        <Box {...props}>
        <FormControl variant="standard" sx={{width:1}}>
            <Input id="SearchBar" value={props.value} autoFocus={true} startAdornment={
                <InputAdornment position="start" >
                    <Search></Search>
                </InputAdornment>
            } placeholder="Search by title or author" onChange={props.handleinput} />
        </FormControl>
        </Box>
    );
}
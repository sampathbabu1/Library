import { Search } from "@mui/icons-material";
import {FormControl,Input, InputAdornment} from "@mui/material";
import { useState } from "react";
export default function SearchBar(props){
    let [inputvalue,SetInputValue]=useState("");
    const handleinput=(value)=>{
       
        SetInputValue(value.target.value);
        
    }
    console.log(inputvalue);
    return (
        <FormControl variant="standard">
            <Input startAdornment={
                <InputAdornment position="start">
                    <Search></Search>
                </InputAdornment>
            } placeholder="Search by title or author" onChange={handleinput}/>
        </FormControl>
    );
}
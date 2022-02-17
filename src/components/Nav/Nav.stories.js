import Nav from "./Nav";
// import {React,useState} from "react";
import React, { useState } from "react";
export default{
    title:"Nav Bar",
    component:Nav
};
let SearchContext;
let FilterContext;
export { SearchContext, FilterContext };
const MockNavBar = () => {
    let searchDisplay = useState(false);
    SearchContext = React.createContext(searchDisplay);
    let filterType = useState("");
    FilterContext = React.createContext(filterType);
    return (
        <SearchContext.Provider value={searchDisplay}>
          <FilterContext.Provider value={filterType}>
            <Nav />
          </FilterContext.Provider>
        </SearchContext.Provider>
    );
  };
export const Primary = ()=><MockNavBar />;
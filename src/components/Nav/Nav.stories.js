import Nav from "./Nav";
import React, { useState } from "react";
import {SearchContext,FilterContext} from "../Helper/ContextValues";
export default{
    title:"Nav Bar",
    component:Nav
};

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
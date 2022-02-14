import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import React, { useState } from "react";
import Home from "../Home/Home";
var SearchContext;
var FilterContext;
export { SearchContext, FilterContext };
const MockNavBar = () => {
  let searchDisplay = useState(false);
  SearchContext = React.createContext(searchDisplay);
  let filterType = useState("");
  FilterContext = React.createContext(filterType);
  return (
    <BrowserRouter>
      <SearchContext.Provider value={searchDisplay}>
        <FilterContext.Provider value={filterType}>
          <Nav />
        </FilterContext.Provider>
      </SearchContext.Provider>
    </BrowserRouter>
  );
};
test("NavBar Explore Button Test", () => {
  render(<MockNavBar />);
  fireEvent.click(screen.getByText("Explore"), { button: 0 });
  expect(screen.getByText("Entrepreneurship")).toBeInTheDocument();
});
test("NavBar Search test", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  fireEvent.click(screen.getAllByTestId("SearchIcon")[0], { button: 0 });
  expect(
    screen.getByPlaceholderText("Search by title or author")
  ).toBeInTheDocument();
});

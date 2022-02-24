import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import React, { useState } from "react";
import Home from "../Home/Home";
import { SearchContext,FilterContext } from "../Helper/ContextValues";
const MockNavBar = () => {
  let searchDisplay = useState(false);
  let filterType = useState("");
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
test('Icon test',()=>{
  render(<MockNavBar />);
  fireEvent.click(screen.getAllByRole('button')[0],{button:0});
})
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
  fireEvent.click(screen.getByText("Explore"),{button:0});
  fireEvent.click(screen.getByText("Entrepreneurship"),{button:0});
});

import {
  fireEvent,
  getByAltText,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import BookDetail from "../BookDetail/BookDetail";
import Lower from "../Lower/Lower";
import Home from "./Home";
test("Home Page test", () => {
  // const history=createMemoryHistory({initialEntries:['/1']});
  render(
    <BrowserRouter>
      <Routes >
        <Route
          path=":id"
          element={
            <>
              <BookDetail />
              {/* <Footer /> */}
            </>
          }
        ></Route>
        <Route path="/" element={<Home />} />
        <Route path="/mylibrary" element={<><Lower ></Lower></>} ></Route>
      </Routes>
    </BrowserRouter>
  );
  const Element =screen.getAllByRole('button')
  // fireEvent.click(Element[7],{button:0})
  fireEvent.click(screen.getByText('My Library'),{button:0})
  
  // const Element = screen.getByAltText("image1");

  // fireEvent.click(Element, { button: 0 });

  // expect(screen.getByText(/Synopsis/i)).toBeInTheDocument();
});

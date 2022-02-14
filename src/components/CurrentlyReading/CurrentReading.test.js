import CurrentlyReading from "./CurrentlyReading";
import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import Home from "../Home/Home";
import { BrowserRouter } from "react-router-dom";
test("currently reading test", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  fireEvent.click(screen.getAllByText(/Read Book/i)[5], { button: 0 });
  // screen.debug();
  render(
    <BrowserRouter>
      <CurrentlyReading />
    </BrowserRouter>
  );
  screen.debug();
  const len=screen.getAllByText(/Finished/i).length;
  expect(len).toBeGreaterThan(0)
});

import { fireEvent, render, screen } from "@testing-library/react";
import Lower from "./Lower";
import { BrowserRouter } from "react-router-dom";
test("My Library Test", () => {
  render(
    <BrowserRouter>
      <Lower />
    </BrowserRouter>
  );
  expect(screen.getByText(/No Currently Reading books/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText("Finished"), { button: 0 });
  expect(screen.getByText(/No Finished Books/i)).toBeInTheDocument();
});

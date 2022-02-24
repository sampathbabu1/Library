import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookDetail from "./BookDetail";

test("BookDetail test", () => {
  render(
    <BrowserRouter>
      <BookDetail id={3} />
    </BrowserRouter>
  );
  fireEvent.click(screen.getByText(/Synopsis/i), { button: 0 });
  expect(screen.getByText(/Beyond Entrepreneurship/i)).toBeInTheDocument();
  expect(screen.getByText(/Synopsis/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Read now/i), { button: 0 });
  fireEvent.click(screen.getByText(/Finished Reading/i), { button: 0 });
  render(
    <BrowserRouter>
      <BookDetail id={2} />
    </BrowserRouter>
  );
  fireEvent.click(screen.getAllByText(/Read now/i)[0], { button: 0 });
  fireEvent.click(screen.getAllByText(/Synopsis/i)[0], { button: 0 });
});

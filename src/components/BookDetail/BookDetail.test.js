import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookDetail from "./BookDetail";

test("BookDetail test", () => {
  render(
    <BrowserRouter>
      <BookDetail />
    </BrowserRouter>
  );
  expect(screen.getByText(/Synopsis/i)).toBeInTheDocument();
});

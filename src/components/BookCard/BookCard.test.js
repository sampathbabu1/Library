import { render, screen } from "@testing-library/react";
import BookCard from "./BookCard";
import db from "../../data.json";
import { BrowserRouter } from "react-router-dom";
const SampleBookCard = () => {
  return (
    <BrowserRouter>
      <BookCard
        buttontitle={"Finished!"}
        index={0}
        category={"finished"}
        author={db["books"][0][0 + 1].author}
        title={db["books"][0][0 + 1].title}
        duration="13-minute read"
        url={db['books'][0][0+1].url}
      />
    </BrowserRouter>
  );
};
test("BookCard test", () => {
  render(<SampleBookCard />);
  const Element = screen.getByText(db["books"][0][0 + 1].author);
  expect(Element).toBeInTheDocument();
});

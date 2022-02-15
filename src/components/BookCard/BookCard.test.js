import { fireEvent, render, screen } from "@testing-library/react";
import BookCard from "./BookCard";
import db from "../../data.json";
import { BrowserRouter } from "react-router-dom";
const SampleBookCard = (props) => {
  return (
    <BrowserRouter>
      <BookCard
        buttontitle={"Finished!"}
        index={props.index}
        category={props.category}
        author={
          db["books"][parseInt(props.index)][parseInt(props.index) + 1].author
        }
        title={
          db["books"][parseInt(props.index)][parseInt(props.index) + 1].title
        }
        duration="13-minute read"
        type="Home"
        url={db["books"][parseInt(props.index)][parseInt(props.index) + 1].url}
      />
    </BrowserRouter>
  );
};
test("BookCard test", () => {
  render(<SampleBookCard category={"finished"} index={0} />);
  const Element = screen.getByText(db["books"][0][0 + 1].author);
  fireEvent.click(screen.getByText(/Finished!/i), { button: 0 });
  expect(Element).toBeInTheDocument();
});

test("BookCard Functionality Test", () => {
  render(<SampleBookCard category={"finished"} index={2} />);
  fireEvent.click(screen.getByText(/Finished/i), { button: 0 });
});

test("BookCard finished Reading", () => {
  const index = 1;
  render(
    <BrowserRouter>
      <BookCard
        buttontitle={"Finished!"}
        index={index}
        finishmanage={(array) => console.log(array)}
        category={"title"}
        author={db["books"][parseInt(index)][parseInt(index) + 1].author}
        title={db["books"][parseInt(index)][parseInt(index) + 1].title}
        duration="13-minute read"
        url={db["books"][parseInt(index)][parseInt(index) + 1].url}
      />
    </BrowserRouter>
  );
  fireEvent.click(screen.getByRole('button'),{button:0});
});

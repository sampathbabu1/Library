import ExploreGrid from "./ExploreGrid";
import { fireEvent, render, screen } from "@testing-library/react";

test("ExploreGrid Test", () => {
  render(
    <ExploreGrid
      bol={true}
      onClick={(value) => {
        console.log(value);
      }}
    />
  );
  let Element = screen.getByText("Entrepreneurship");
  fireEvent.click(Element,{button:0});
  fireEvent.click(Element,{button:0});
  Element=screen.getByText("Personal Development");
  fireEvent.click(Element,{button:0});
  expect(Element).toBeVisible();
});

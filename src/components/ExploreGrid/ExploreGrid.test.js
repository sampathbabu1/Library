import ExploreGrid from "./ExploreGrid";
import { render, screen } from "@testing-library/react";

test("ExploreGrid Test", () => {
  render(
    <ExploreGrid
      bol={true}
      onClick={(value) => {
        console.log(value);
      }}
    />
  );
  const Element = screen.getByText("Entrepreneurship");
  expect(Element).toBeVisible();
});

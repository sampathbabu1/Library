import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
test("Footer test", () => {
  render(
    // <ThemeProvider theme={themer}>
      <Footer />
    // </ThemeProvider>
  );
  const Element = screen.getAllByText(/Blinkist*/i);
  expect(Element[0]).toBeInTheDocument();
});

import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";

test("renders the header component", () => {
  render(<Header />);
  const hamburgerIcon = screen.getByRole("img");
  expect(hamburgerIcon).toBeInTheDocument();
});

test("clicking on the close icon in Header closes Navigation", () => {
  render(<Header />);

  // Initially, Navigation should not be in the document
  expect(screen.queryByTestId("navigation")).toBeNull();

  // Click on the hamburger menu to open Navigation
  fireEvent.click(screen.getByAltText("Hamburger Menu"));

  // Now, Navigation should be in the document
  expect(screen.getByTestId("navigation")).toBeInTheDocument();

  // Click on the close icon in Navigation
  fireEvent.click(screen.getByAltText("close icon"));

  // After clicking the close icon, Navigation should not be in the document (closed)
  expect(screen.queryByTestId("navigation")).toBeNull();
});

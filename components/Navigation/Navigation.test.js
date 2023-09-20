import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("renders Navigation", () => {
  render(<Navigation />);
  // Assert that the component renders without throwing any errors
  expect(screen.getByTestId("navigation")).toBeInTheDocument();
});

test("clicking on the close icon calls the onClose function", () => {
  const onClose = jest.fn();
  render(<Navigation onClose={onClose} />);

  // Simulate a click on the close icon
  screen.getByAltText("close icon").click();

  // Assert that the onClose function is called
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("navigation links work", () => {
  render(<Navigation />);

  // Find the navigation links
  const dashboardLink = screen.getByText("Dashboard");
  const flightsLink = screen.getByText("Flights");
  const aboutLink = screen.getByText("About");

  // Simulate clicking on the links
  userEvent.click(dashboardLink);
  userEvent.click(flightsLink);
  userEvent.click(aboutLink);
});

import { render, screen, waitFor } from "@testing-library/react";
import Navigation from "./Navigation";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

test("renders Navigation", () => {
  render(<Navigation />);
  expect(screen.getByTestId("navigation")).toBeInTheDocument();
});

test("clicking on the close icon calls the onClose function", () => {
  const onClose = jest.fn();
  render(<Navigation onClose={onClose} />);
  screen.getByAltText("close icon").click();
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("navigation links work", () => {
  render(<Navigation />);
  const dashboardLink = screen.getByRole("link", { name: "Dashboard" });
  const flightsLink = screen.getByRole("link", { name: "Flights" });
  const aboutLink = screen.getByRole("link", { name: "About" });

  userEvent.click(dashboardLink);
  userEvent.click(flightsLink);
  userEvent.click(aboutLink);
});

test("navigation links work", () => {
  render(<Navigation />);

  const dashboardLink = screen.getByText("Dashboard");
  const flightsLink = screen.getByText("Flights");
  const aboutLink = screen.getByText("About");

  userEvent.click(dashboardLink);
  expect(dashboardLink).toHaveAttribute("href", "/");

  userEvent.click(flightsLink);
  expect(flightsLink).toHaveAttribute("href", "/flight_list");

  userEvent.click(aboutLink);
  expect(aboutLink).toHaveAttribute("href", "/about");
});

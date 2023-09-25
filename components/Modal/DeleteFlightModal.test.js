import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createPortal } from "react-dom";
import DeleteFlightModal from "./DeleteFlightModal";

// Create a portal container in the document body
const portalContainer = document.createElement("div");
portalContainer.id = "modal-root";
document.body.appendChild(portalContainer);

test("onDelete is called when Delete button is clicked", async () => {
  const onDelete = jest.fn();

  render(
    // Wrap the modal component in createPortal
    createPortal(
      <DeleteFlightModal
        flight={{ flight_iata: "ABC123", scheduled_date: "2023-09-30" }}
        onDelete={onDelete}
      />,
      portalContainer // Specify the portal container
    )
  );

  // Simulate clicking the Delete button
  userEvent.click(screen.getByText("Delete"));

  // Ensure onDelete is called
  await waitFor(() => expect(onDelete).toHaveBeenCalled());
});

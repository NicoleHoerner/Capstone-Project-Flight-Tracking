import { useState } from "react";
import { createPortal } from "react-dom";

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CancelButton,
  SubmitButton,
  InputLabel,
  InputField,
} from "./EditFlightModal.styled";

export default function EditFlightModal({ onClose, selectedFlight, onSave }) {
  const [flightIata, setFlightIata] = useState(
    selectedFlight?.flight_iata || ""
  );
  const [scheduledDate, setScheduledDate] = useState(
    selectedFlight?.scheduled_date || ""
  );
  const [departure, setDeparture] = useState(selectedFlight?.departure || "");
  const [arrival, setArrival] = useState(selectedFlight?.arrival || "");

  const handleFlightIataChange = (event) => {
    setFlightIata(event.target.value);
  };
  const handleScheduledDateChange = (event) => {
    setScheduledDate(event.target.value);
  };

  const handleDepartureChange = (event) => {
    setDeparture(event.target.value);
  };

  const handleArrivalChange = (event) => {
    setArrival(event.target.value);
  };

  const handleSaveChanges = () => {
    event.preventDefault();
    const editedFlightData = {
      flight_iata: flightIata,
      scheduled_date: scheduledDate,
      departure: departure,
      arrival: arrival,
    };

    onSave(editedFlightData);
    onClose();
  };

  const modalContent = (
    <ModalOverlay onClose={onClose}>
      <ModalContainer>
        <form>
          <ModalHeader>Edit Flight</ModalHeader>
          <ModalBody>
            <InputLabel htmlFor="flight_iata">Flight #</InputLabel>
            <InputField
              type="text"
              id="flight_iata"
              name="flight_iata"
              defaultValue={flightIata}
              onChange={handleFlightIataChange}
            />
            <InputField
              type="date"
              id="scheduled_date"
              name="scheduled_date"
              defaultValue={scheduledDate}
              onChange={handleScheduledDateChange}
            />
            <InputField
              type="text"
              id="departure"
              name="departure"
              defaultValue={departure}
              onChange={handleDepartureChange}
            />
            <InputField
              type="text"
              id="arrival"
              name="arrival"
              defaultValue={arrival}
              onChange={handleArrivalChange}
            />
            {/* Add similar input fields for other flight details */}
          </ModalBody>
          <ModalFooter>
            <SubmitButton type="submit" onClick={handleSaveChanges}>
              Save Changes
            </SubmitButton>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </ModalFooter>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
  return createPortal(modalContent, document.getElementById("modal-root"));
}

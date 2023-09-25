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

  const handleSaveChanges = (event) => {
    event.preventDefault();
    const editedFlightData = {
      flight_iata: flightIata,
      scheduled_date: scheduledDate,
      departure: departure,
      arrival: arrival,
    };
    onSave(
      selectedFlight.flight_iata,
      selectedFlight.scheduled_date,
      editedFlightData
    );
    onClose();
  };

  const modalContent = (
    <ModalOverlay onClose={onClose}>
      <ModalContainer>
        <ModalHeader>Edit Flight</ModalHeader>
        <form onSubmit={handleSaveChanges}>
          <ModalBody>
            <InputLabel htmlFor="flight_iata">Flight #</InputLabel>
            <InputField
              type="text"
              id="flight_iata"
              name="flight_iata"
              defaultValue={flightIata}
              onChange={handleFlightIataChange}
            />
            <InputLabel htmlFor="scheduled_date">Scheduled Date</InputLabel>
            <InputField
              type="date"
              id="scheduled_date"
              name="scheduled_date"
              defaultValue={scheduledDate}
              onChange={handleScheduledDateChange}
            />
            <InputLabel htmlFor="departure">Departure Airport</InputLabel>
            <InputField
              type="text"
              id="departure"
              name="departure"
              defaultValue={departure}
              onChange={handleDepartureChange}
            />
            <InputLabel htmlFor="arrival">Arrival Airport</InputLabel>
            <InputField
              type="text"
              id="arrival"
              name="arrival"
              defaultValue={arrival}
              onChange={handleArrivalChange}
            />
          </ModalBody>
          <ModalFooter>
            <SubmitButton type="submit">Save Changes</SubmitButton>
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

import { useState } from "react";
import { createPortal } from "react-dom";
import useLocalStorageState from "use-local-storage-state";

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  InputLabel,
  InputField,
} from "./EditFlightModal.styled";

export default function EditFlightModal({ onClose, selectedFlight, onSave }) {
  const [flightIata, setFlightIata] = useState(
    selectedFlight?.flight_iata || ""
  );
  const scheduledDate = selectedFlight?.scheduled_date || " ";

  const handleFlightIataChange = (e) => {
    setFlightIata(e.target.value);
  };

  /* const handleSaveChanges = () => {
    // Call the onSave function with the edited data
    onSave(editedFlightData);
  }; 
 */
  const modalContent = (
    <ModalOverlay onClick={onClose}>
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
            {/* Add similar input fields for other flight details */}
          </ModalBody>
          <ModalFooter>
            <ModalButton /* onClick={handleSaveChanges} */>
              Save Changes
            </ModalButton>
            <ModalButton onClick={onClose}>Cancel</ModalButton>
          </ModalFooter>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
  return createPortal(modalContent, document.getElementById("modal-root"));
}

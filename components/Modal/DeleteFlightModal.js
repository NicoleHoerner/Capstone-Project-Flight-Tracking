import { useState } from "react";
import { createPortal } from "react-dom";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CancelButton,
  DeleteButton,
} from "./DeleteFlightModal.styled";

export default function DeleteFlightModal({ flight, onCancel, onDelete }) {
  const modalContent = (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>Delete Confirmation</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this flight?</p>
          <p>Flight Number: {flight.flight_iata}</p>
          <p>Date: {flight.scheduled_date}</p>
        </ModalBody>
        <ModalFooter>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <DeleteButton
            onClick={() => {
              handleFlightDeletion(flight);
            }}
          >
            Delete
          </DeleteButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
  return createPortal(modalContent, document.getElementById("modal-root"));
}

import {
  StyledForm,
  Card,
  StyledAddButton,
  StyledHeading,
  StyledLabel,
} from "./AddFlightForm.styled";
//import { useState } from "react";

export default function AddFlightForm() {
  return (
    <>
      <StyledForm>
        <Card>
          <StyledHeading>Schedule your next flight</StyledHeading>
          <StyledLabel htmlFor="flight number">Flight #</StyledLabel>
          <input type="text" required />

          <label>
            Date of Flight:
            <input type="text" required />
          </label>
          <label>
            Departure:
            <input type="text" />
          </label>
          <label>
            Arrival:
            <input type="text" />
          </label>
          <StyledAddButton type="submit">ADD FLIGHT</StyledAddButton>
        </Card>
      </StyledForm>
    </>
  );
}

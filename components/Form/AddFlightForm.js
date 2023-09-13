import {
  StyledForm,
  Card,
  StyledAddButton,
  StyledHeading,
  InputLabel,
  InputBox,
  InputField,
} from "./AddFlightForm.styled";
import { useState } from "react";

export default function AddFlightForm() {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event) => {
    setIsFocused(false);
    setIsValid(event.target.validity.valid);
  };

  return (
    <>
      <StyledForm>
        <Card>
          <StyledHeading>Schedule your next flight</StyledHeading>
          <InputBox>
            <InputLabel
              htmlFor="flight number"
              isFocused={isFocused}
              isValid={isValid}
            >
              Flight #
            </InputLabel>
            <InputField
              type="text"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="date" isFocused={isFocused} isValid={isValid}>
              Date of Flight
            </InputLabel>
            <InputField
              type="text"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputBox>
          <InputBox>
            <InputLabel
              htmlFor="departure airport"
              isFocused={isFocused}
              isValid={isValid}
            >
              Departure
            </InputLabel>
            <InputField type="text" onFocus={handleFocus} onBlur={handleBlur} />
          </InputBox>
          <InputBox>
            <InputLabel
              htmlFor="arrival airport"
              isFocused={isFocused}
              isValid={isValid}
            >
              Arrival
            </InputLabel>
            <InputField type="text" onFocus={handleFocus} onBlur={handleBlur} />
          </InputBox>
          <StyledAddButton type="submit">ADD FLIGHT</StyledAddButton>
        </Card>
      </StyledForm>
    </>
  );
}

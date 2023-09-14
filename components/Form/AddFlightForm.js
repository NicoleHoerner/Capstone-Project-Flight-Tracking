import {
  StyledForm,
  Card,
  StyledAddButton,
  StyledHeading,
  InputLabel,
  InputBox,
  InputField,
} from "./AddFlightForm.styled";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { useState } from "react";
import { flights } from "@/data/septemberFlights";

export default function AddFlightForm() {
  const [flightsOfInterest, setFlightsOfInterest] = useLocalStorageState(
    "flights",
    { defaultValue: flights }
  );
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event) => {
    setIsFocused(false);
    setIsValid(event.target.validity.valid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the form data in localStorage
    const formData = new FormData(event.target);
    const flightData = Object.fromEntries(formData);
    const date = new Date(flightData.scheduled_date);
    flightData.scheduled_date = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    };

    setFlightsOfInterest([...flightsOfInterest, flightData]);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
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

/* import {
  StyledForm,
  Card,
  StyledAddButton,
  StyledHeading,
  InputLabel,
  InputBox,
  InputField,
} from "./AddFlightForm.styled";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { useState } from "react";


export default function AddFlightForm() {
  const [flights, setFlights] = useLocalStorageState("flights", {
    defaultValue: [],
  });
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (event) => {
    setIsFocused(false);
    setIsValid(event.target.validity.valid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store the form data in localStorage
    const newFlight = {
      flight_iata: event.target.elements["flight number"].value,
      scheduled_date: {
        month: event.target.elements["date"].value,
        day: event.target.elements["date"].value,
        year: event.target.elements["date"].value,
      },
      departure: event.target.elements["departure airport"].value,
      arrival: event.target.elements["arrival airport"].value,
    };
    setFlights((prevFlights) => [...prevFlights, newFlight]);
    event.target.reset();
    router.push("/flight-list");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
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
} */

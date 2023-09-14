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
import useLocalStorageState from "use-local-storage-state";
import { flights } from "@/data/septemberFlights";

export default function AddFlightForm() {
  const [flightsOfInterest, setFlightsOfInterest] = useLocalStorageState(
    "flights",
    { defaultValue: flights }
  );
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const flightData = Object.fromEntries(formData);
    const date = new Date(flightData.scheduled_date);
    flightData.scheduled_date = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    };

    setFlightsOfInterest([...flightsOfInterest, flightData]);
    event.target.reset();
    event.target.flight_iata.focus();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Card>
          <StyledHeading>Schedule your next flight</StyledHeading>
          <InputBox>
            <InputLabel htmlFor="flight_iata" isFocused={isFocused}>
              Flight #
            </InputLabel>
            <InputField
              id="flight_iata"
              type="text"
              name="flight_iata"
              required
              maxLength="7"
              pattern="^[A-Za-z]{2,3}\d{1,4}[A-Za-z]?$"
              onFocus={handleFocus}
              onBlur={(event) => {
                handleBlur(event);
                const input = event.target;
                if (!input.validity.valid) {
                  input.setCustomValidity(
                    "Flight number must be 2 or 3 letters followed by 1 to 4 digits with an optional letter."
                  );
                } else {
                  input.setCustomValidity(""); // Reset custom validity
                }
              }}
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="scheduled_date" isFocused={isFocused}>
              Date of Flight
            </InputLabel>
            <InputField
              id="scheduled_date"
              type="date"
              name="scheduled_date"
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="departure" isFocused={isFocused}>
              Departure
            </InputLabel>
            <InputField
              id="departure"
              type="text"
              name="departure"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="arrival" isFocused={isFocused}>
              Arrival
            </InputLabel>
            <InputField
              id="arrival"
              type="text"
              name="arrival"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
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
} */

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

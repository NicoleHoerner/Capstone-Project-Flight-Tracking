import {
  StyledForm,
  Card,
  StyledAddButton,
  StyledHeading,
  InputLabel,
  InputBox,
  InputField,
  StyledInfoText,
} from "./AddFlightForm.styled";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { flights } from "@/data/septemberFlights";
import { useRouter } from "next/router";

export default function AddFlightForm() {
  const [flightsOfInterest, setFlightsOfInterest] = useLocalStorageState(
    "flightsInfo",
    { defaultValue: flights }
  );

  const router = useRouter();

  const [isFocused, setIsFocused] = useState({});

  const handleFocus = (event) => {
    const input = event.target;
    if (input.value) {
      setIsFocused({ [input.name]: true });
    } else {
      setIsFocused({ [input.name]: true, placeholder: "" });
    }
  };
  const handleBlur = (event) => {
    const input = event.target;
    if (!input.value) {
      setIsFocused({
        [input.name]: false,
        placeholder: "Your placeholder text",
      });
    } else {
      setIsFocused({ [input.name]: false });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const flightData = Object.fromEntries(formData);

    setFlightsOfInterest([...flightsOfInterest, flightData]);
    router.push("/flight_list");
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Card>
          <StyledHeading>Schedule your next flight</StyledHeading>
          <InputBox>
            <InputLabel
              htmlFor="flight_iata"
              $isFocused={isFocused["flight_iata"]}
            >
              Flight #
            </InputLabel>
            <InputField
              id="flight_iata"
              type="text"
              name="flight_iata"
              required
              maxLength="7"
              pattern="^[A-Za-z]{2,3}[0-9]{1,4}[A-Za-z]?$"
              $isFocused={isFocused["flight_iata"]}
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
            <StyledInfoText>
              e.g. &quot;CM288&quot;, &quot;LH18&quot;, &quot;KL757&quot;
            </StyledInfoText>
          </InputBox>
          <InputBox>
            <InputLabel
              htmlFor="scheduled_date"
              $isFocused={isFocused["scheduled_date"]}
            >
              Date of Flight
            </InputLabel>
            <InputField
              id="scheduled_date"
              type="date"
              name="scheduled_date"
              required
              $isFocused={isFocused["scheduled_date"]}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="departure" $isFocused={isFocused["departure"]}>
              Departure
            </InputLabel>
            <InputField
              id="departure"
              type="text"
              name="departure"
              $isFocused={isFocused["departure"]}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputBox>
          <InputBox>
            <InputLabel htmlFor="arrival" $isFocused={isFocused["arrival"]}>
              Arrival
            </InputLabel>
            <InputField
              id="arrival"
              type="text"
              name="arrival"
              $isFocused={isFocused["arrival"]}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputBox>
          <StyledAddButton type="submit" aria-label="add flight">
            ADD FLIGHT
          </StyledAddButton>
        </Card>
      </StyledForm>
    </>
  );
}

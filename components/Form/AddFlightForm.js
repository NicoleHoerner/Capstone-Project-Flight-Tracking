import {
  StyledForm,
  Card,
  StyledAddButton,
  StyledHeading,
  StyledLabel,
} from "./AddFlightForm.styled";
import { useState } from "react";

export default function AddFlightForm({ onAddFlight }) {
  const [flightNumber, setFlightNumber] = useState("");
  const [dateOfFlight, setDateOfFlight] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new flight object
    const newFlight = {
      flight_iata: flightNumber,
      scheduled_date: {
        month: "", // You'll need to parse the date here
        day: "",
        year: "",
      },
      departure: "", // Set the departure location
      arrival: "", // Set the arrival location
    };

    // Call the onAddFlight function to add the new flight to the list
    onAddFlight(newFlight);

    // Clear the form inputs
    setFlightNumber("");
    setDateOfFlight("");
    setDeparture("");
    setArrival("");
  };

  /* const addFlight = () => {
        // Define the addFlight function logic here
    }; */

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Card>
          <StyledHeading>Schedule your flight</StyledHeading>
          <StyledLabel htmlFor="flight number">Flight #</StyledLabel>
          <input
            type="text"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            required
          />

          <label>
            Date of Flight:
            <input
              type="text"
              value={dateOfFlight}
              onChange={(e) => setDateOfFlight(e.target.value)}
              required
            />
          </label>
          <label>
            Departure:
            <input
              type="text"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </label>
          <label>
            Arrival:
            <input
              type="text"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            />
          </label>
          <StyledAddButton onAddFlight={addFlight} />
        </Card>
      </StyledForm>
    </>
  );
}

import styled from "styled-components";
import { FlightNumber } from "../components/StyledComponents/StyledFlightNumber";
import { flights } from "../data/septemberFlights";
import { useState } from "react";
import AddFlightForm from "../components/Form/AddFlightForm";
import { useLocalStorageState } from "use-local-storage-state";

export default function FlightList() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  const handleAddFlightClick = () => {
    // Navigate to the form when the button is clicked
    router.push("/flight-form");
  };
  return (
    <>
      <H1>Simple Tracking.</H1>
      <H2>
        This month&apos;s <StyledWord>flights</StyledWord>.
      </H2>
      <H3>Scheduled Flights</H3>

      <ScheduledList>
        {flights.map((flight) => (
          <FlightRow key={flight.flight_iata}>
            <StyledFlightInfo>
              <FlightNumber>{flight.flight_iata}</FlightNumber>
              <FlightDetails>
                <FlightDetailLabel>DATE</FlightDetailLabel>
                {flight.scheduled_date.month} {flight.scheduled_date.day},{" "}
                {flight.scheduled_date.year}
              </FlightDetails>
              <FlightDetails>
                <FlightDetailLabel>FROM</FlightDetailLabel>
                {flight.departure}
              </FlightDetails>
              <FlightDetails>
                <FlightDetailLabel>TO</FlightDetailLabel>
                {flight.arrival}
              </FlightDetails>
            </StyledFlightInfo>
            <Separator />
          </FlightRow>
        ))}
      </ScheduledList>
      <Button onClick={handleAddFlightClick}>Add Flight</Button>
    </>
  );
}

const H1 = styled.h1`
  margin: 5px auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  max-width: 600px;
  position: relative;
  z-index: -1;
`;

const H2 = styled.h2`
  margin: auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  max-width: 600px;
  position: relative;
  padding-left: 113px;
  z-index: -1;
`;

const StyledWord = styled.span`
  color: #3951a3;
`;
const H3 = styled.h3`
  text-align: center;
  font-size: 15px;
  padding: 50px;
  margin: 40px;
  font-size: 1rem;
  background-color: #eee7de;
  border: none;
  border-radius: 10px;
  padding: 6px 12px;
  width: max-content;
`;

const ScheduledList = styled.ul`
  list-style-type: none;
  padding: 16px;
  margin-top: 16px;
`;

const StyledFlightInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FlightRow = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc; /* Add a light grey separating line */
  padding: 10px 0;
`;

const Separator = styled.div`
  width: 20px; /* Adjust the width of the separator as needed */
`;

const FlightDetailLabel = styled.div`
  font-size: 0.6rem;
  color: #eee7de;
`;

const FlightDetails = styled.div`
  text-align: center;
  font-size: 0.6rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #7e97b8;
  background-color: #e0e8ef;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 255, 255, 0.333);
  border-radius: 40px 40px 40px 40px;
  padding: 16px 24px 16px 28px;
  margin: 12px;
  transform: translate(0px, 0px) rotate(0deg);
  transition: 0.2s;

  &:hover {
    color: #516d91;
    background-color: #e5edf5;
    box-shadow: -2px -1px 8px 0px #ffffff, 2px 1px 8px 0px rgb(95 157 231 / 48%);
  }

  &:active {
    box-shadow: none;
  }
`;

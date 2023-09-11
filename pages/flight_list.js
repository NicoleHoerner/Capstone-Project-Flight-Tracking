import styled from "styled-components";
import { FlightNumber } from "../components/StyledComponents/StyledFlightNumber";
import { flights } from "../data/septemberFlights";

export default function FlightList() {
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

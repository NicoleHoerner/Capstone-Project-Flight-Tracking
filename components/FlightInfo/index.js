import styled from "styled-components";
import { useState } from "react";
import { FlightNumber } from "@/components/StyledComponents/StyledFlightNumber";

export default function FlightInfo({ flight }) {
  const [additionalFlightInfo, setAdditionalFlightInfo] = useState();

  async function getFlightInfo(iata) {
    const response = await fetch(`/api/${iata}`);
    const { data } = await response.json();
    if (data && data[0]?.flight_date === flight.scheduled_date) {
      setAdditionalFlightInfo(data[0]);
      console.log(data[0]);
    } else {
      setAdditionalFlightInfo(null);
    }
  }

  if (!flight) return null;

  return (
    <FlightItem>
      <p>
        <FlightNumber>{flight.flight_iata}</FlightNumber> Airline:{" "}
        {additionalFlightInfo
          ? additionalFlightInfo.airline.name
          : flight.flight_iata}
      </p>
      {additionalFlightInfo ? (
        <StyledFlightInfo>
          <FlightDetails>
            <FlightDetailInfo>Flight Date:</FlightDetailInfo>
            {additionalFlightInfo.flight_date}
          </FlightDetails>
          <FlightDetails>
            <FlightDetailInfo>FROM </FlightDetailInfo>
            {additionalFlightInfo.departure.airport}
          </FlightDetails>
          <VerticalSeperator />
          <FlightDetails>
            <FlightDetailInfo>TO</FlightDetailInfo>
            {additionalFlightInfo.arrival.airport}
          </FlightDetails>
          <FlightDetails>
            <FlightDetailInfo>Flight Status</FlightDetailInfo>
            {additionalFlightInfo.flight_status}
          </FlightDetails>
        </StyledFlightInfo>
      ) : (
        <Button
          disabled={additionalFlightInfo === null}
          onClick={() => getFlightInfo(flight.flight_iata)}
        >
          Check realtime flight
        </Button>
      )}
      {additionalFlightInfo &&
        additionalFlightInfo.flight_status === "active" && (
          <StatusMessage>MIGUEL is airborne</StatusMessage>
        )}
    </FlightItem>
  );
}

const FlightItem = styled.li`
  margin: 40px 0;
  border-bottom: 1px solid #ccc; /* Add a light grey separating line */
  padding: 10px 0;
`;

const StyledFlightInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FlightDetails = styled.div`
  display: flex;
  flex-direction: column; /* Stack the label and data vertically */
  text-align: center;
  font-size: 0.6rem;
  margin: 0 10px; /* Add margin for horizontal spacing */
`;

const FlightDetailInfo = styled.div`
  font-size: 0.6rem;
  color: #eee7de;
  margin-bottom: 5px;
`;

const VerticalSeperator = styled.div`
  width: 1px;
  height: 50px;
  background-color: lightgrey;
  margin: 0 10px; /* Adjust the spacing around the vertical line */
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-size: 0.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #7e97b8;
  background-color: #e0e8ef;
  border-style: solid;
  border-width: 2px 2px 2px 2px;
  border-color: rgba(255, 255, 255, 0.333);
  border-radius: 40px 40px 40px 40px;
  padding: 4px 10px 4px 10px;
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

const StatusMessage = styled.div`
  color: blue;
  font-weight: bold;
`;

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
    } else {
      setAdditionalFlightInfo(null);
    }
  }

  if (!flight) return null;

  return (
    <FlightItem>
      <p>
        <FlightNumber>{flight.flight_iata}</FlightNumber> Airline:{" "}
        {flight.flight_iata}
      </p>
      {additionalFlightInfo ? (
        <div>
          <p>Flight Date: {additionalFlightInfo.flight_date}</p>
          <p>Departure Airport: {additionalFlightInfo.departure.airport}</p>
          <p>Arrival Airport: {additionalFlightInfo.arrival.airport}</p>
          <p>Flight Status: {additionalFlightInfo.flight_status}</p>
        </div>
      ) : (
        <button
          disabled={additionalFlightInfo === null}
          onClick={() => getFlightInfo(flight.flight_iata)}
        >
          Check realtime flight
        </button>
      )}
    </FlightItem>
  );
}

const FlightItem = styled.li`
  margin: 40px 0;
`;

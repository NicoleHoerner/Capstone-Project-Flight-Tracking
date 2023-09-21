import Head from "next/head";
import styled from "styled-components";
import { FlightNumber } from "../components/StyledComponents/StyledFlightNumber";
import { useEffect, useState } from "react";
import useFlightStore from "../store/flightStore";

export default function Home() {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    async function getFlights() {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setFlights(data.data.data.slice(0, 10));
    }
    getFlights();
  }, []);

  const { flightsForToday } = useFlightStore();
  const flightNumbersForToday = flightsForToday.map(
    (flight) => flight.flight_iata
  );

  return (
    <>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Penguin Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>🐧Penguin Capstone Template🐧</Heading>
      {flightNumbersForToday.length > 0 && (
        <FlightInfo>
          <StyledH2 aria-label="Flights Scheduled for Today">
            Flights Scheduled for Today
          </StyledH2>
          <FlightList>
            {flightNumbersForToday.map((flightNumber) => (
              <FlightItem key={flightNumber}>
                <p>
                  <FlightNumber>{flightNumber}</FlightNumber>
                </p>
              </FlightItem>
            ))}
          </FlightList>
        </FlightInfo>
      )}
      {flights.length > 0 && (
        <FlightInfo>
          <StyledH2 aria-label="Flight Information">
            Flight Information
          </StyledH2>
          <FlightList>
            {flights.map((flight) => (
              <FlightItem key={flight.flight.number}>
                <p>
                  <FlightNumber>{flight.flight.iata}</FlightNumber> Airline:{" "}
                  {flight.airline.name}
                </p>
                <p>Flight Date: {flight.flight_date}</p>
                <p>Departure Airport: {flight.departure.airport}</p>
                <p>Arrival Airport: {flight.arrival.airport}</p>
                <p>Flight Status: {flight.flight_status}</p>
              </FlightItem>
            ))}
          </FlightList>
        </FlightInfo>
      )}
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
const FlightInfo = styled.section`
  background-color: #7cb9e8;
  padding: 16px;
  margin-top: 16px;
`;

const StyledH2 = styled.h2`
  font-size: 1.2rem;
  background-color: #eee7de;
  width: max-content;
  border: none;
  border-radius: 10px;
  padding: 6px 12px;
`;

const FlightList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FlightItem = styled.li`
  margin: 40px 0;
`;

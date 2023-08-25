import Head from "next/head";
import Navigation from "../components/Navigation";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Home() {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    async function getFlights() {
      const response = await fetch("/api/hello");
      const data = await response.json();
      console.log(data);
      setFlights(data.data.data.slice(0, 10));
    }
    getFlights();
  }, []);

  return (
    <>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Penguin Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>🐧Penguin Capstone Template🐧</Heading>
      <Navigation />
      {flights.length > 0 && (
        <FlightInfo>
          <StyledH2>Flight Information</StyledH2>
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
  background-color: #f5f5f5;
  padding: 16px;
  margin-top: 16px;
`;

const StyledH2 = styled.h2`
  font-size: 1.2rem;
  background-color: #cbd5e1;
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

const FlightNumber = styled.span`
  background-color: #cbd5e1;
  border: none;
  border-radius: 10px;
  padding: 6px 12px;
`;

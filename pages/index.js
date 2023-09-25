import Head from "next/head";
import styled from "styled-components";
import { flights } from "@/data/septemberFlights";
import useLocalStorageState from "use-local-storage-state";
import FlightInfo from "@/components/FlightInfo";

export default function Home() {
  const [flightsOfInterest, setFlightsOfInterest] = useLocalStorageState(
    "flightsInfo",
    { defaultValue: flights }
  );

  const todaysFlights = flightsOfInterest.filter((flight) => {
    const flightDate = new Date(flight.scheduled_date);
    const todaysDate = new Date();
    return (
      flightDate.getDate() === todaysDate.getDate() &&
      flightDate.getMonth() === todaysDate.getMonth() &&
      flightDate.getFullYear() === todaysDate.getFullYear()
    );
  });

  return (
    <>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Penguin Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Simple Tracking.</Heading>
      <H2 aria-label="This month's flights">
        <StyledWord>Miguel&apos;s</StyledWord> Flight Status.
      </H2>
      {todaysFlights.length > 0 && (
        <StyledFlightInfo>
          <StyledH3 aria-label="Flight Information">
            Flight Information
          </StyledH3>
          <FlightList>
            {todaysFlights.map((flight) => (
              <FlightInfo key={flight.flight_iata} flight={flight} />
            ))}
          </FlightList>
        </StyledFlightInfo>
      )}
    </>
  );
}

const StyledFlightInfo = styled.section`
  background-color: #ecf0f3;
  padding: 16px;
  margin-top: 16px;
`;

const StyledH3 = styled.h3`
  font-size: 1.2rem;
  background-color: #cbd5e1;
  width: max-content;
  border: none;
  border-radius: 10px;
  padding: 6px 12px;
`;

const FlightList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Heading = styled.h1`
  margin: 5px auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  max-width: 600px;
  position: relative;
  z-index: -1;
`;

const H2 = styled.h2`
  margin: auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  max-width: 600px;
  position: relative;
  padding-left: 113px;
  z-index: -1;
`;

const StyledWord = styled.span`
  color: #7cb9e8;
`;

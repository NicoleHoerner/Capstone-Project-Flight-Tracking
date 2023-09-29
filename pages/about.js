import styled from "styled-components";

export default function AboutPage() {
  return (
    <>
      <H1>Simple Tracking.</H1>
      <H2 aria-label="About this App">
        About this <StyledWord>App</StyledWord>.
      </H2>
      <H3>Purpose of this flight tracking app</H3>
      <StyledText>
        <StyledLetter>W</StyledLetter>elcome to my personal non-commercial
        Flight Tracker App – a passion project that was initiated as a capstone
        project idea as part of our web development bootcamp at neue fische
        GmbH.
      </StyledText>
      <StyledText>
        This user-centric platform caters to pilots, travelers, and aviation
        enthusiasts, offering an intuitive space to track flights of interest.
        Whether you&apos;re a pilot, a globe-trotting explorer, or just curious
        about aviation, this app keeps you sky-bound.
      </StyledText>
      <StyledText>
        Key features? Personalization reigns supreme. Customize your flight
        tracking experience effortlessly. The dashboard transforms into a
        real-time flight information hub, pulling data from a trusted API
        partner. It&apos;s like having a virtual window to the skies, with live
        flight paths and status updates. Plus, your Flight List Overview
        simplifies your aviation journey. Easily manage your personalized flight
        list for any designated timeframe. Add, edit, or delete flights at will.
        And when a flight is scheduled for today, expect detailed information
        right on your dashboard. This Flight Tracking App is your ticket to
        staying in sync with the skies.
      </StyledText>
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
  color: #7cb9e8;
`;
const H3 = styled.h3`
  text-align: center;
  font-size: 15px;
  padding: 5px;
  margin: 20px;
`;

const StyledText = styled.p`
  font-size: 14px;
  margin: 20px;
  padding: 0 1em;
`;

const StyledLetter = styled.span`
  color: #7cb9e8;
  font-size: 1.2rem;
`;

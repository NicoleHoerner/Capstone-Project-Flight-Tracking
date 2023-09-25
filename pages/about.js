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
  padding: 10px;
  margin: 40px;
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

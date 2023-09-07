import styled from "styled-components";

export default function FlightList() {
  return (
    <>
      <H1>Simple Tracking.</H1>

      <H2>
        This month&apos;s <StyledWord>flights</StyledWord>.
      </H2>
      <H3>Scheduled Flights</H3>
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

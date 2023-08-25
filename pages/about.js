import Navigation from "../components/Navigation";
import styled from "styled-components";
//import Image from "next/image";
import lineIcon from "../public/lineIcon.svg";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <H1>Simple Tracking.</H1>
      <StyledImage src={lineIcon} alt="line" />
      <H2> About this app.</H2>
    </>
  );
}

/* Simple Tracking. */
const H1 = styled.h1`
  position: absolute;
  width: 169px;
  height: 24px;
  left: 47px;
  top: 77px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

/* identical to box height */

/* lineIcon */
const StyledImage = styled.span`
  position: absolute;
  width: 54.1px;
  height: 0px;
  left: 51.89px;
  top: 122px;
  border: 2px solid #000000;
`;

/* About this App. */
const H2 = styled.h2`
  position: absolute;
  width: 175px;
  height: 24px;
  left: 113px;
  top: 101px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;

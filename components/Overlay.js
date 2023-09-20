import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0); /* Adjust the opacity as needed */
  z-index: 1000; /* Higher z-index value to ensure it's on top of other content */
`;

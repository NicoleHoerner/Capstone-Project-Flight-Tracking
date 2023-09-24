import { styled } from "styled-components";

export default function AircraftFilled() {
  return (
    <StyledAircraftIconFilled
      width="40"
      height="40"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.30141 14.9458L7.63471 14.9369L10.9326 9.58157L14.5992 9.55724C15.1525 9.55357 15.5962 9.10395 15.5925 8.55063C15.5888 7.99731 15.1392 7.55362 14.5859 7.55729L10.9193 7.58162L7.55066 2.27052L6.21736 2.27937L7.91938 7.60153L4.25279 7.62586L3.24397 6.29919L2.24399 6.30582L2.92612 8.63468L2.27495 10.9724L3.27493 10.9658L4.26606 9.62581L7.93265 9.60148L6.30141 14.9458Z"
        fill="#7CB9E8"
      />
    </StyledAircraftIconFilled>
  );
}

const StyledAircraftIconFilled = styled.svg`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

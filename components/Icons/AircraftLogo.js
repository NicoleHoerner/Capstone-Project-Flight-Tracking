import { styled } from "styled-components";

export default function AircraftLogo() {
  return (
    <StyledAircraftLogo
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#94A3B8" fillOpacity="0.5" />
      <path
        d="M27 22V20L19 15V9.5C19 8.67 18.33 8 17.5 8C16.67 8 16 8.67 16 9.5V15L8 20V22L16 19.5V25L14 26.5V28L17.5 27L21 28V26.5L19 25V19.5L27 22Z"
        fill="#7CB9E8"
      />
    </StyledAircraftLogo>
  );
}

const StyledAircraftLogo = styled.svg`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  align-items: center;
`;

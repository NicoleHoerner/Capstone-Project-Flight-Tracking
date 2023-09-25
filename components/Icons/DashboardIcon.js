import { styled } from "styled-components";

export default function Control() {
  return (
    <StyledDashboardIcon
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="#7CB9E8"
      viewBox="0 0 256 256"
    >
      <path d="M229.11,62.82A16,16,0,0,0,216,56H136V24h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56H40A16,16,0,0,0,25,77.47l26.19,72a16,16,0,0,0,15,10.53H96v64a8,8,0,0,0,16,0V160h32v64a8,8,0,0,0,16,0V160h29.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,62.82ZM110.68,144,97.58,72h60.84l-13.1,72ZM40,72H81.32l13.09,72H66.18Zm149.82,72H161.59l13.09-72H216Z"></path>
    </StyledDashboardIcon>
  );
}

const StyledDashboardIcon = styled.svg`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  align-items: center;
`;

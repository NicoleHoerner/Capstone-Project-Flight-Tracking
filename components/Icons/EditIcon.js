import { styled } from "styled-components";

export default function Pencil() {
  return (
    <StyledEditIcon
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5325 4.2225C15.825 4.515 15.825 4.9875 15.5325 5.28L14.16 6.6525L11.3475 3.84L12.72 2.4675C13.0125 2.175 13.485 2.175 13.7775 2.4675L15.5325 4.2225ZM2.25 15.75V12.9375L10.545 4.6425L13.3575 7.455L5.0625 15.75H2.25Z"
        fill="grey"
      />
    </StyledEditIcon>
  );
}

const StyledEditIcon = styled.svg`
  margin-left: 0.5rem;
  &:hover {
    width: 25px;
    height: 25px;
  }
`;

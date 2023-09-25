import { styled } from "styled-components";

export default function Aircraft() {
  return (
    <StyledAircraftIcon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3924 13.6144L11.0069 7.30241L13.701 4.60825C14.8557 3.45361 15.2406 1.91409 14.8557 1.14433C14.0859 0.75945 12.5464 1.14433 11.3918 2.29897L8.69759 4.99313L2.38557 3.60756C2.00069 3.53058 1.69278 3.68454 1.53883 3.99244L1.3079 4.37732C1.15395 4.7622 1.23093 5.14708 1.53883 5.37801L5.61856 8.07217L4.07904 10.3814H1.76976L1 11.1512L3.30928 12.6907L4.8488 15L5.61856 14.2302V11.921L7.92784 10.3814L10.622 14.4612C10.8529 14.7691 11.2378 14.846 11.6227 14.6921L12.0076 14.5381C12.3155 14.3072 12.4694 13.9993 12.3924 13.6144Z"
        stroke="#7CB9E8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledAircraftIcon>
  );
}

const StyledAircraftIcon = styled.svg`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

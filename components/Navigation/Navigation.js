import Image from "next/image";
import closeIcon from "@/public/closeIcon.svg";
import {
  StyledNav,
  StyledNavWrapper,
  StyledUl,
  StyledNavLink,
  StyledCloseIcon,
} from "./Navigation.styled";

const Navigation = ({ onClose }) => {
  return (
    <StyledNavWrapper data-testid="navigation">
      <StyledCloseIcon>
        <Image
          src={closeIcon}
          width={30}
          height={30}
          alt="close icon"
          onClick={onClose}
        />
      </StyledCloseIcon>
      <StyledNav>
        <StyledUl>
          <StyledNavLink href="/">Dashboard</StyledNavLink>
          <StyledNavLink href="/flight_list">Flights</StyledNavLink>
          <StyledNavLink href="/about">About</StyledNavLink>
        </StyledUl>
      </StyledNav>
    </StyledNavWrapper>
  );
};

export default Navigation;

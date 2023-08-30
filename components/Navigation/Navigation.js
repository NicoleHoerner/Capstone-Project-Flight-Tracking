import Image from "next/image";
import closeIcon from "@/public/closeIcon.svg";
import {
  StyledNav,
  StyledNavWrapper,
  StyledUl,
  StyledNavLink,
  StyledCloseIcon,
} from "./Navigation.styled";

const Navigation = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };
  return (
    <StyledNavWrapper>
      <StyledCloseIcon>
        <Image
          src={closeIcon}
          width={30}
          height={30}
          alt="close icon"
          onClick={closeSidebar}
        />
      </StyledCloseIcon>
      <StyledNav>
        <StyledUl>
          <StyledNavLink href="/">Dashboard</StyledNavLink>
          <StyledNavLink href="/about">About</StyledNavLink>
        </StyledUl>
      </StyledNav>
    </StyledNavWrapper>
  );
};

export default Navigation;

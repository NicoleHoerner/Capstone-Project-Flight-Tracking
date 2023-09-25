import Image from "next/image";
import { useRouter } from "next/router";
import Control from "../Icons/DashboardIcon";
import FlightListIcon from "../Icons/FlightListIcon";
import AboutInfo from "../Icons/AboutIcon";
import aircraftLogo from "@/public/aircraftLogo.svg";
import {
  StyledNav,
  StyledNavWrapper,
  StyledUl,
  StyledNavLink,
  StyledCloseIcon,
} from "./Navigation.styled";

const Navigation = ({ onClose }) => {
  const router = useRouter();

  const handleClick = () => {
    onClose();
  };

  const handleLinkClick = (href) => {
    onClose();
    router.push(href);
  };

  return (
    <StyledNavWrapper data-testid="navigation">
      <StyledCloseIcon>
        <Image
          src={aircraftLogo}
          width={30}
          height={30}
          alt="close icon"
          onClick={handleClick}
        />
      </StyledCloseIcon>
      <StyledNav>
        <StyledUl>
          <StyledNavLink href="/" onClick={() => handleLinkClick("/")}>
            <Control />
            Dashboard
          </StyledNavLink>
          <StyledNavLink
            href="/flight_list"
            onClick={() => handleLinkClick("/flight_list")}
          >
            <FlightListIcon />
            Flights
          </StyledNavLink>
          <StyledNavLink
            href="/about"
            onClick={() => handleLinkClick("/about")}
          >
            <AboutInfo />
            About
          </StyledNavLink>
        </StyledUl>
      </StyledNav>
    </StyledNavWrapper>
  );
};

export default Navigation;

/* import Image from "next/image";
import aircraftLogo from "@/public/aircraftLogo.svg";
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
          src={aircraftLogo}
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

export default Navigation; */

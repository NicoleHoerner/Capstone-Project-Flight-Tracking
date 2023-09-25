import React, { useState, useEffect } from "react";
import aircraftLogo from "@/public/aircraftLogo.svg";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import { Container, StyledMenuIcon } from "./Header.styled";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const shouldFixHeader = scrollPosition > 0;

    setIsFixed(shouldFixHeader);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <StyledMenuIcon>
        <Image
          src={aircraftLogo}
          width={30}
          height={30}
          alt="Hamburger Menu"
          onClick={showSidebar}
        />
        {sidebar && <Navigation onClose={() => setSidebar(false)} />}
      </StyledMenuIcon>
    </Container>
  );
}

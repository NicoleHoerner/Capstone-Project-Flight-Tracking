import React, { useState } from "react";
import hamburgerMenu from "@/public/hamburgerMenu.svg";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import { Container, StyledMenuIcon } from "./Header.styled";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <StyledMenuIcon>
        <Image
          src={hamburgerMenu}
          width={30}
          height={30}
          alt="Hamburger Menu"
          onClick={showSidebar}
        />
        {sidebar && <Navigation active={setSidebar} />}
      </StyledMenuIcon>
    </Container>
  );
}

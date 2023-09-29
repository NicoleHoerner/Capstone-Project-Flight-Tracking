import React, { useState } from "react";
import aircraftLogo from "@/public/aircraftLogo.svg";
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
          src={aircraftLogo}
          width={30}
          height={30}
          alt="Logo Navigation"
          onClick={showSidebar}
        />
        {sidebar && <Navigation onClose={() => setSidebar(false)} />}
      </StyledMenuIcon>
    </Container>
  );
}

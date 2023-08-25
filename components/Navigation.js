import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink href="/">Dashboard</StyledNavLink>
      <StyledNavLink href="/about">About</StyledNavLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const StyledNavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;

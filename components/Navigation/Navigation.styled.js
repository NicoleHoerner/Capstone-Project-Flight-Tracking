import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const StyledNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100px;
  max-height: 180px;
  display: block;
  border-radius: 0 10% 10% 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  background: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  overflow: hidden;
`;

export const StyledUl = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  display: grid;
  transition: all 0.5s ease;
`;

export const StyledNavLink = styled(Link)`
  padding: 10px 15px;
  margin: 2px 10px;
  text-decoration: none;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 10px;

  &:hover {
    color: #3951a3;
  }

  &:active {
    background: #ffffff;
    color: blue;
    transition: all 0.4s ease;
  }
`;

export const StyledCloseIcon = styled.span`
  position: fixed;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 150px;
  cursor: pointer;
`;

import React, { useState } from "react";
import { Nav, Logo, Menu, MenuLink, Hamburger } from "./NavbarStyle";
//!links working with to tag
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">
        <i>{"<Clarusway> "}</i>
        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to={{ pathname: "https://github.com/" }}>GitHub</MenuLink>
        <MenuLink to="/login">Login</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

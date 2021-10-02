import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";
import { NavbarContainer, NavbarLink } from "../style/NavbarElements";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const greyMode = theme.state.greyMode;
  return (
    <NavbarContainer className={`navbar ${greyMode ? "grey" : "colorful"}`}>
      <NavbarLink>
        <Link to="/pokemons">Pokemons</Link>
      </NavbarLink>
      <Button />
      <NavbarLink>
        <Link to="/types">Types</Link>
      </NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;

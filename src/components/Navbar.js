import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const greyMode = theme.state.greyMode;
  return (
    <div className={`navbar ${greyMode ? "grey" : "colorful"}`}>
      <Link className="navbar-link" to="/pokemons">
        Pokemons
      </Link>
      <Button />
      <Link className="navbar-link" to="/types">
        Types
      </Link>
    </div>
  );
};

export default Navbar;

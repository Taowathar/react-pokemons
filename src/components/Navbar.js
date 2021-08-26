import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-link" to="/pokemons">
        Pokemons
      </Link>
      <Link className="navbar-link" to="/types">
        Types
      </Link>
    </div>
  );
};

export default Navbar;

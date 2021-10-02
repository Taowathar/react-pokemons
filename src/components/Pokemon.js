import { useAxiosGet } from "../hooks/axiosGet";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon, setPokemonId }) => {
  let picture = null;
  const pokemonId = pokemon.url.split("/")[6];

  const fetchData = useAxiosGet(pokemon.url, [])[1];
  if (fetchData) {
    picture = fetchData.sprites.front_default;
  }

  const onClick = () => {
    setPokemonId(pokemonId);
  };

  return (
    <>
      <Link
        className="detail-link"
        onClick={onClick}
        to={`/pokemon/${pokemonId}`}
      >
        <div className="pokemon-card">
          <h3 className="pokemon-name">{pokemon.name}</h3>
          <img src={picture} alt="logo" />
        </div>
      </Link>
    </>
  );
};

export default Pokemon;

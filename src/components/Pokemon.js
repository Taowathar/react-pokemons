import { useAxiosGet } from "../hooks/axiosGet";
import { Link } from "react-router-dom";
import { H3, PokemonCard } from "../style/PokemonCardElements";

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
    <PokemonCard>
      <Link onClick={onClick} to={`/pokemon/${pokemonId}`}>
        <div>
          <H3>{pokemon.name}</H3>
          <img src={picture} alt="logo" />
        </div>
      </Link>
    </PokemonCard>
  );
};

export default Pokemon;

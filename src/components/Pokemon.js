
import { useHttp } from "../hooks/http";

const Pokemon = ({ pokemon}) => {
  let picture = null;
  const [, fetchData] = useHttp(pokemon.url, [])

  if (fetchData) {
    picture = fetchData.sprites.front_default;
  }

  return (
    <div className="pokemon-card">
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <img src={picture} alt="logo" />
    </div>
  );
};

export default Pokemon;

import { useHttp } from "../hooks/http";

const PokemonDetail = ({ pokemonId }) => {
  let pokemon = null;

  const [, fetchData] = useHttp(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
    []
  );
  if (fetchData) {
    pokemon = fetchData;
  }
  return <div></div>;
};

export default PokemonDetail;

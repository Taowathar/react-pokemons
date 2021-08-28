import { useHttp } from "../hooks/http";

const PokemonDetail = ({ pokemonId }) => {
  let pokemon,
    name,
    height,
    weight,
    picture,
    species = null;
  let abilities = [];
  let types = [];

  const [, fetchData] = useHttp(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
    []
  );

  if (fetchData) {
    pokemon = fetchData;
    name = pokemon.name;
    height = pokemon.height;
    weight = pokemon.weight;
    picture = pokemon.sprites.other["official-artwork"]["front_default"];
    species = pokemon.species.name;
    abilities = pokemon.abilities;
    types = pokemon.types;
  }
  return (
    <div className="detail-container">

    </div>
  );
};

export default PokemonDetail;

import Pokemon from "./Pokemon";
import { useAxiosGet } from "../hooks/axiosGet";

const PokemonList = (props) => {
  const pokemonsPerPage = 20;
  const pokemonsFrom = props.currentPage * pokemonsPerPage;

  const pokemonListUrl = `https://pokeapi.co/api/v2/pokemon?offset=${pokemonsFrom}&limit=${pokemonsPerPage}`;
  let pokemonList = null;
  const [, fetchedPokemons] = useAxiosGet(pokemonListUrl, [props.currentPage]);
  if (fetchedPokemons) {
    pokemonList = fetchedPokemons.results;
  }

  return (
    <>
      {pokemonList
        ? pokemonList.map((pokemon) => (
            <Pokemon
              key={pokemon.url}
              pokemon={pokemon}
              setPokemonId={props.setPokemonId}
            />
          ))
        : null}
    </>
  );
};

export default PokemonList;

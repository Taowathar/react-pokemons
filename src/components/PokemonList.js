import Pokemon from "./Pokemon";
import { useAxiosGet } from "../hooks/axiosGet";
import Pagination from "./Pagination";

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
      <div className={`card-container ${props.greyMode ? "grey" : "colorful"}`}>
        {pokemonList
          ? pokemonList.map((pokemon) => (
              <Pokemon
                key={pokemon.url}
                pokemon={pokemon}
                setPokemonId={props.setPokemonId}
              />
            ))
          : null}
      </div>
      <Pagination setCurrentPage={props.setCurrentPage} />
    </>
  );
};

export default PokemonList;

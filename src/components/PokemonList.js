import Pokemon from "./Pokemon";
import { useAxiosGet } from "../hooks/axiosGet";
import Pagination from "./Pagination";
import { PokemonCardContainer } from "../style/PokemonCardElements";

const PokemonList = (props) => {
  const pokemonsPerPage = 20;
  const pokemonsFrom = props.currentPage * pokemonsPerPage;

  const pokemonListUrl = `https://pokeapi.co/api/v2/pokemon?offset=${pokemonsFrom}&limit=${pokemonsPerPage}`;
  let pokemonList = null;
  const fetchedPokemons = useAxiosGet(pokemonListUrl, [props.currentPage])[1];
  if (fetchedPokemons) {
    pokemonList = fetchedPokemons.results;
  }

  return (
    <>
      <PokemonCardContainer
        className={`card-container ${props.greyMode ? "grey" : "colorful"}`}
      >
        {pokemonList
          ? pokemonList.map((pokemon) => (
              <Pokemon
                key={pokemon.url}
                pokemon={pokemon}
                setPokemonId={props.setPokemonId}
              />
            ))
          : null}
      </PokemonCardContainer>
      <Pagination setCurrentPage={props.setCurrentPage} />
    </>
  );
};

export default PokemonList;

import Pokemon from "./Pokemon";
import { useAxiosGet } from "../hooks/axiosGet";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const pokemonsPerPage = 20;
  const pokemonsFrom = props.currentPage * pokemonsPerPage;
  const pageCount = 56;

  const handlePageChange = (selectedObject) => {
    props.setCurrentPage(selectedObject.selected);
  };

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
      <div className="pagination-field">
        <ReactPaginate
          pageCount={pageCount}
          pageRange={2}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination-field"}
          previousLinkClassName={"page"}
          breakClassName={"page"}
          nextLinkClassName={"page"}
          pageClassName={"page"}
          disabledClassNae={"disabled"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default PokemonList;

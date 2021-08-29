import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useAxiosGet } from "./hooks/http";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";

const App = () => {
  let [currentPage, setCurrentPage] = useState(0);
  let [pokemonId, setPokemonId] = useState();
  const pageCount = 56;
  const pokemonsPerPage = 20;
  const pokemonsFrom = currentPage * pokemonsPerPage;

  const pokemonListUrl = `https://pokeapi.co/api/v2/pokemon?offset=${pokemonsFrom}&limit=${pokemonsPerPage}`;
  let pokemonList = null;
  const [, fetchedPokemons] = useAxiosGet(pokemonListUrl, [currentPage]);
  if (fetchedPokemons) {
    pokemonList = fetchedPokemons.results;
  }

  let typeList = null;
  const [, fetchedTypeList] = useAxiosGet("https://pokeapi.co/api/v2/type", []);
  if (fetchedTypeList) {
    typeList = fetchedTypeList.results;
  }

  const handlePageChange = (selectedObject) => {
    setCurrentPage(selectedObject.selected);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" exact render={() => <></>} />
          <Route
            path="/pokemons"
            exact
            render={() => (
              <div className="x">
                <div className="card-container">
                  <PokemonList
                    pokemons={pokemonList}
                    setPokemonId={setPokemonId}
                  />
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
              </div>
            )}
          />
          <Route
            path="/types"
            exact
            render={() => (
              <div className="type-container">
                <TypeList typeList={typeList} />
              </div>
            )}
          />
          <Route
            path={`/pokemon/${pokemonId}`}
            exact
            render={() => (
              <div>
                <PokemonDetail pokemonId={pokemonId} />
              </div>
            )}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;

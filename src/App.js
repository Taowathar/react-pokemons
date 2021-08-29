import ReactPaginate from "react-paginate";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useAxiosGet } from "./hooks/axiosGet";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import { ThemeContext } from "./components/ThemeContext";

const App = () => {
  const theme = useContext(ThemeContext)
  const greyMode = theme.state.greyMode

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
      <div className={`app ${greyMode ? "grey" : "colorful"}`}>
        <Navbar />
        <div className={`container ${greyMode ? "grey" : "colorful"}`}>
          <Route path="/" exact render={() => <div className="main-picture-container">
            <img src="./SI13bW.png" alt="main_picture" />
          </div>} />
          <Route
            path="/pokemons"
            exact
            render={() => (
              <div>
                <div className={`card-container ${greyMode ? "grey" : "colorful"}`}>
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

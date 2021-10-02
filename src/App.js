import ReactPaginate from "react-paginate";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import { ThemeContext } from "./components/ThemeContext";

const App = () => {
  const theme = useContext(ThemeContext);
  const greyMode = theme.state.greyMode;

  let [currentPage, setCurrentPage] = useState(0);
  let [pokemonId, setPokemonId] = useState();
  const pageCount = 56;

  const handlePageChange = (selectedObject) => {
    setCurrentPage(selectedObject.selected);
    console.log(currentPage);
  };

  return (
    <Router>
      <div className={`app ${greyMode ? "grey" : "colorful"}`}>
        <Navbar />
        <div className={`container ${greyMode ? "grey" : "colorful"}`}>
          <Route
            path="/"
            exact
            render={() => (
              <div className="main-picture-container">
                <img src="./SI13bW.png" alt="main_picture" />
              </div>
            )}
          />
          <Route
            path="/pokemons"
            exact
            render={() => (
              <div style={{ minHeight: "90vh" }}>
                <div
                  className={`card-container ${greyMode ? "grey" : "colorful"}`}
                >
                  <PokemonList
                    setPokemonId={setPokemonId}
                    currentPage={currentPage}
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
              <div className="type-container" style={{ minHeight: "90vh" }}>
                <TypeList />
              </div>
            )}
          />
          <Route
            path={`/pokemon/${pokemonId}`}
            exact
            render={() => (
              <div style={{ minHeight: "90vh" }}>
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

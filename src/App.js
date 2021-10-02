import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import { ThemeContext } from "./context/ThemeContext";
import { GlobalStyles } from "./context/Theme";

const App = () => {
  const theme = useContext(ThemeContext);
  const greyMode = theme.state.greyMode;

  let [currentPage, setCurrentPage] = useState(0);
  let [pokemonId, setPokemonId] = useState();

  return (
    <Router>
      <GlobalStyles />
      <div className={`app ${greyMode ? "grey" : "colorful"}`}>
        <Navbar />
        <div className={`container ${greyMode ? "grey" : "colorful"}`}>
          <Route
            path="/"
            exact
            render={() => (
              <div
                className={`main-picture-container ${
                  greyMode ? "grey" : "colorful"
                }`}
              >
                <img src="./SI13bW.png" alt="main_picture" />
              </div>
            )}
          />
          <Route
            path="/pokemons"
            exact
            render={() => (
              <div style={{ minHeight: "115vh" }}>
                <PokemonList
                  setPokemonId={setPokemonId}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  theme={greyMode}
                />
              </div>
            )}
          />
          <Route
            path="/types"
            exact
            render={() => (
              <div className="type-container" style={{ minHeight: "88vh" }}>
                <TypeList />
              </div>
            )}
          />
          <Route
            path={`/pokemon/${pokemonId}`}
            exact
            render={() => (
              <div style={{ minHeight: "88vh" }}>
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

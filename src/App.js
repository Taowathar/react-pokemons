import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromServer = await fetchPokemons();
      setPokemonList(pokemonsFromServer);
    };
    getPokemons();
  }, []);

  const fetchPokemons = async () => {
    const results = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    const data = await results.json();

    return data.results;
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
            render={(props) => (
              <div className="card-container">
                <PokemonList pokemons={pokemonList} />
              </div>
            )}
          />
          <Route path="/types" exact render={(props) => <></>} />
          {/* <Route path="/about" component={About} /> */}
        </div>
      </div>
    </Router>
  );
};

export default App;

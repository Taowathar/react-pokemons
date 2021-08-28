import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import { useHttp } from "./hooks/http";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  var [currentPage, setCurrentPage] = useState(0);
  const pageCount = 56;
  const pokemonsPerPage = 20;

  let typeList = null;
  const [, fetchedTypeList] = useHttp("https://pokeapi.co/api/v2/type", []);

  if (fetchedTypeList) {
    typeList = fetchedTypeList.results;
  }

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonsFromServer = await fetchPokemons({ currentPage });
      setPokemonList(pokemonsFromServer);
    };

    getPokemons();
  }, []);

  const fetchPokemons = async ({ currentPage }) => {
    const pokemonsFrom = currentPage * pokemonsPerPage;
    const pokemonListUrl = `https://pokeapi.co/api/v2/pokemon?offset=${pokemonsFrom}&limit=${pokemonsPerPage}`;
    const results = await fetch(pokemonListUrl);
    const data = await results.json();

    return data.results;
  };

  const handlePageChange = (selectedObject) => {
    setCurrentPage(selectedObject.selected);
    const getPokemons = async () => {
      const pokemonsFromServer = await fetchPokemons({ currentPage });
      setPokemonList(pokemonsFromServer);
    };
    getPokemons();
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
              <div className="x">
                <div className="card-container">
                  <PokemonList pokemons={pokemonList} />
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
            render={(props) => (
              <div className="type-container">
                <TypeList typeList={typeList} />
              </div>
            )}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;

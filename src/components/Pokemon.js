import { useState, useEffect } from "react";

const Pokemon = ({ pokemon}) => {

  const [picture, setPicture] = useState()

  useEffect(() => {
    const getPokemons = async () => {
      const pictureFromServer = await fetchPokemonPicture();
      setPicture(pictureFromServer);
    };
    getPokemons();
  }, []);

  const fetchPokemonPicture = async () => {
    const results = await fetch(pokemon.url);
    const data = await results.json();

    return data.sprites.front_default;
  };

  return (
    <div className="pokemon-card">
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <img src={picture} alt="logo" />
    </div>
  );
};

export default Pokemon;

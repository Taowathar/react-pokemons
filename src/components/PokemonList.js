import Pokemon from "./Pokemon";

const PokemonList = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.url} pokemon={pokemon} />
      ))}
    </>
  );
};

export default PokemonList;

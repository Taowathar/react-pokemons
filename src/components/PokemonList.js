import Pokemon from "./Pokemon";

const PokemonList = ({ pokemons, setPokemonId }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.url}
          pokemon={pokemon}
          setPokemonId={setPokemonId}
        />
      ))}
    </>
  );
};

export default PokemonList;

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <h3 className="pokemon-name">{pokemon.name}</h3>
    </div>
  );
};

export default Pokemon;

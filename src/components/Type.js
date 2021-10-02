import { PokemonTypeCard } from "../style/PokemonTypeElements";

const Type = ({ type }) => {
  return (
    <PokemonTypeCard className="type-card">
      <h3>{type.name}</h3>
    </PokemonTypeCard>
  );
};

export default Type;

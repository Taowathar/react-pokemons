import { useAxiosGet } from "../hooks/http";

const PokemonDetail = ({ pokemonId }) => {
  let pokemon,
    name,
    height,
    weight,
    picture = null;
  let abilities = [];
  let types = [];

  const [, fetchData] = useAxiosGet(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
    []
  );

  if (fetchData) {
    pokemon = fetchData;
    name = pokemon.name;
    height = pokemon.height;
    weight = pokemon.weight;
    picture = pokemon.sprites.other["official-artwork"]["front_default"];
    abilities = pokemon.abilities;
    types = pokemon.types;
  }
  return (
    <div className="detail-page">
      <div className="detail-container">
        <div className="picture-container">
          <img src={picture} alt="official-artwork" />
        </div>
        <div className="details">
          <h1>{name}</h1>
          <h4>Height: {height}</h4>
          <h4>Weight: {weight}</h4>

          <h2>Types:</h2>
          <div className="types">
            {types.map((type) => (
              <div className="type" key={types.indexOf(type)}>
                <p>{type.type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1>Abilities</h1>
      <div className="abilities">
        {abilities.map((ability) => (
          <div className="ability-card" key={abilities.indexOf(ability)}>
            <p>{ability.ability.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonDetail;

import { useAxiosGet } from "../hooks/axiosGet";
import {
  PokemonDetailH4,
  PokemonDetailContainer,
  PokemonDetailH1,
  PokemonDetailPage,
  PokemonDetailPictureContainer,
  PokemonDetails,
  PokemonAbilities,
  PokemonDetailAbilityCard,
  PokemonDetailH2,
  PokemonTypes,
  PokemonType,
} from "../style/PokemonDetailElements";

const PokemonDetail = ({ pokemonId }) => {
  let pokemon,
    name,
    height,
    weight,
    picture = null;
  let abilities = [];
  let types = [];

  const fetchData = useAxiosGet(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
    []
  )[1];

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
    <PokemonDetailPage>
      <PokemonDetailContainer>
        <PokemonDetailPictureContainer>
          <img src={picture} alt="official-artwork" />
        </PokemonDetailPictureContainer>
        <PokemonDetails>
          <PokemonDetailH1>{name}</PokemonDetailH1>
          <PokemonDetailH4>Height: {height}</PokemonDetailH4>
          <PokemonDetailH4>Weight: {weight}</PokemonDetailH4>

          <PokemonDetailH2>Types:</PokemonDetailH2>
          <PokemonTypes>
            {types.map((type) => (
              <PokemonType key={types.indexOf(type)}>
                <p>{type.type.name}</p>
              </PokemonType>
            ))}
          </PokemonTypes>
        </PokemonDetails>
      </PokemonDetailContainer>
      <h1>Abilities</h1>
      <PokemonAbilities>
        {abilities.map((ability) => (
          <PokemonDetailAbilityCard key={abilities.indexOf(ability)}>
            <p>{ability.ability.name}</p>
          </PokemonDetailAbilityCard>
        ))}
      </PokemonAbilities>
    </PokemonDetailPage>
  );
};

export default PokemonDetail;

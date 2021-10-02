import Type from "./Type";
import { useAxiosGet } from "../hooks/axiosGet";
import { PokemonTypeContainer } from "../style/PokemonTypeElements";

const TypeList = () => {
  let typeList = null;

  const fetchedTypeList = useAxiosGet("https://pokeapi.co/api/v2/type", [])[1];
  if (fetchedTypeList) {
    typeList = fetchedTypeList.results;
  }

  return (
    <PokemonTypeContainer>
      {typeList
        ? typeList.map((type) => <Type key={type.url} type={type} />)
        : null}
    </PokemonTypeContainer>
  );
};

export default TypeList;

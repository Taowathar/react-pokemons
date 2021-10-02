import Type from "./Type";
import { useAxiosGet } from "../hooks/axiosGet";

const TypeList = () => {
  let typeList = null;

  const [, fetchedTypeList] = useAxiosGet("https://pokeapi.co/api/v2/type", []);
  if (fetchedTypeList) {
    typeList = fetchedTypeList.results;
  }

  return (
    <>
      {typeList
        ? typeList.map((type) => <Type key={type.url} type={type} />)
        : null}
    </>
  );
};

export default TypeList;

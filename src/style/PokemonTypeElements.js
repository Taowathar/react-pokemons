import styled from "styled-components";

export const PokemonTypeContainer = styled.div`
  width: 70%;
  max-width: 850px;
  max-height: 800px;
  text-transform: capitalize;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 5px solid black;
  border-radius: 15px;
  margin: auto;
  background-color: seagreen;
  align-items: center;
`;

export const PokemonTypeCard = styled.div`
  padding: 10px;
  width: 160px;
  height: 60px;
  background-color: darkgoldenrod;
  border: 5px solid black;
  border-radius: 15px;
  margin: 5px;
  text-align: center;
  font-family: "Sigmar One", cursive;
`;

import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 75%;
  max-width: 850px;
  border: 5px solid black;
  border-radius: 15px;
  margin: auto;
  background-color: #a7a72f;
  align-items: center;
`;

export const PokemonCard = styled.div`
  padding: 10px;
  width: 160px;
  height: 160px;
  background-color: green;
  border: 5px solid black;
  border-radius: 15px;
  margin: 5px;
  text-align: center;
`;

export const H3 = styled.div`
  margin-top: 0;
  color: gold;
  font-family: "Frijole", cursive;
  font-weight: 100;
  font-size: 14px;
  text-decoration: none;
`;

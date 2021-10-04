import styled, { keyframes } from "styled-components";

const Scale = keyframes`
0% {
  transform: rotateY(0);
}
50% {
  transform: rotateY(-180deg);
}
50% {
  transform: rotateY(-180deg);
}
}
`;

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
  margin: 5px;
  text-align: center;

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 10px;
  position: relative;
  :hover {
    animation: ${Scale} 0.6s ease-in-out both;
  }
`;

export const H3 = styled.div`
  margin-top: 0;
  color: gold;
  font-family: "Frijole", cursive;
  font-weight: 100;
  font-size: 14px;
  text-decoration: none;
`;

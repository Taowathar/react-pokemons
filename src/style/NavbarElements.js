import styled from "styled-components";

export const NavbarContainer = styled.div`
  z-index: 5;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 20px;
  background-color: olive;
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavbarLink = styled.div`
  a {
    width: 80px;
    padding: 20px;
    background-color: darkslategrey;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    color: khaki;
    font-family: "Patua One", cursive;
  }
`;

import { createGlobalStyle, keyframes } from "styled-components";


const Scale = keyframes`
0% {transform: rotate(0);}
100% {transform: rotate(360deg);}
`;


export const GlobalStyles = createGlobalStyle`

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    
    }
    
    .app {
        width: 100%;
        height: 100%;
    }
    
    app.grey {
        filter: grayscale(1);
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    
    .container {
        padding-top: 120px;
        width: 100%;
        background-color: cadetblue;
    }
    
    .container.grey {
        padding-top: 120px;
        width: 100%;
        background-color: cadetblue;
        filter: grayscale(1);
    }
    
    .navbar.grey {
        filter: grayscale(1);
    }

    .main-picture-container img {
        position: fixed;
        top: 80px;
        height: 100%;
        width: 100%;
        min-height: 92vh;
    }

    button {
        border: 5px solid black;
        border-radius: 15px;
        margin-top: 0;
        background-color: seagreen;
        padding: 10px;
        text-align: center;
        font-family: "Sigmar One", cursive;

        :hover {
            animation: ${Scale} 0.6s ease-in-out both;
          }npm
    }

    a {
        text-decoration: None;
    }
  `;

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body{
    min-height: 100vh;
    font-family: Arial;
  background-image: linear-gradient(200deg, yellow, #1b5e20);
  }
`;

export default GlobalStyles;
// globalStyles.ts

import { createGlobalStyle } from "styled-components";
// 1. import the font

export const theme = {
  primaryBlue: "#0794B4",
  secondaryBlue: "#043157",
  primaryWhite: "#fff",
};

// 2. interpolate it using tagged template literals
const GlobalStyle = createGlobalStyle`
  html {
    font-family: Roboto;
  }

  button {
    font-family: Roboto;

  }
`;

export default GlobalStyle;

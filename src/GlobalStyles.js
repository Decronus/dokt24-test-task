import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1F1F1F;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
  }

  p {
    font-size: 12px;
    font-weight: 400;
  }

`;

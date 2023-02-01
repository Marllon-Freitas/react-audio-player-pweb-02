import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --primary-color: #121212;
    --secondary-color: #fff;
    --tertiary-color: #f2f2f2;
}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    width: 100vw;
    overflow-x: hidden;
    height: 100vh;
  }
`;

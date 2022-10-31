import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Satoshi-Bold";
    src: url("/fonts/Satoshi-Bold.woff2");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Satoshi-Regular";
    src: url("/fonts/Satoshi-Regular.woff2");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

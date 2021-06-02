import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 400;
    font-size: 16px;
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

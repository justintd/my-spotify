import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-Black.ttf') format('truetype'),
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-BlackItalic.ttf') format('truetype'),
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-Bold.ttf') format('truetype'),
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf') format('truetype'),
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf') format('truetype'),
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf') format('truetype'),
    font-weight: 800;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf') format('truetype'),
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf') format('truetype'),
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-Italic.ttf') format('truetype'),
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-Light.ttf') format('truetype'),
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-LightItalic.ttf') format('truetype'),
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-Medium.ttf') format('truetype'),
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-MediumItalic.ttf') format('truetype'),
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype'),
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-SemiBold.ttf') format('truetype'),
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf') format('truetype'),
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-Thin.ttf') format('truetype'),
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url('../static/assets/fonts/Montserrat/Montserrat-ThinItalic.ttf') format('truetype'),
    font-weight: 100;
    font-style: italic;
  }
  
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

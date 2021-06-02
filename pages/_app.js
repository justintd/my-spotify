import React from 'react';
import GlobalStyle from '../styles/globalStyles';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

export default App;

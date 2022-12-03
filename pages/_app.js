import * as React from "React";
// import { ThemeProvider } from "@mui/material/styles";
// import createEmotionCache from '../styles/createEmotionCache';
// import { CacheProvider } from "@emotion/react";
import theme from '../styles/theme.js';
// components
import Layout from '../components/Layout';


// const clientSideEmotionCache = createEmotionCache();


function App({ Component, pageProps}) {

  return (
    <Component {...pageProps} />
  );
}

export default App

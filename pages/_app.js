import * as React from "React";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from '../styles/createEmotionCache';
import { CacheProvider } from "@emotion/react";
import theme from '../styles/theme.js';
import Header from '../src/components/Header.js'

const clientSideEmotionCache = createEmotionCache();


function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {

  return (
    <CacheProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App

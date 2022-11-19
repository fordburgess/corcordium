import * as React from "React";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from '../styles/createEmotionCache';
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();


function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {

  return (
    <CacheProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App

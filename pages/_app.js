import * as React from "React";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from '../styles/createEmotionCache';
import { CacheProvider } from "@emotion/react";
import theme from '../styles/theme.js';
// components
import { Layout } from '../components/Layout';


const clientSideEmotionCache = createEmotionCache();


function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {

  return (
    <CacheProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App

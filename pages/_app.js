import React from "React";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import createEmotionCache from '../utility/createEmotionCache';

import theme from '../styles/theme.js';
// components
import Layout from '../components/Layout';


const clientSideEmotionCache = createEmotionCache();


function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {

  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

export default App

import React from "React";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import createEmotionCache from '../utility/createEmotionCache';
import { makeStyles } from "@mui/styles";
import theme from '../styles/theme.js';
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

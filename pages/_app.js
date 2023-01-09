import React from "React";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { CloudinaryContext } from "cloudinary-react";
import createEmotionCache from '../utility/createEmotionCache';
import { makeStyles } from "@mui/styles";
import Layout from '../components/Layout';

const clientSideEmotionCache = createEmotionCache();


function App({ Component, pageProps, emotionCache = clientSideEmotionCache }) {

  return (
    <CloudinaryContext>
      <CacheProvider value={emotionCache}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    </CloudinaryContext>
  );
}

export default App

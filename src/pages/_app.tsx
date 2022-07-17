import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createEmotionCache, lightThemeOptions } from 'styles';

import '@fontsource/noto-sans-jp/300.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/700.css';

interface MyApp extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const lightTheme = createTheme(lightThemeOptions);

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyApp) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta content="initial-scale=1, width=device-width" name="viewport" />
    </Head>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default App;

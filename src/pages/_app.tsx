import { AppProps } from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { globalStyle } from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <RecoilRoot>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;

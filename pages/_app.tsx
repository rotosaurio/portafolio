import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
      <Head>
      <title>Edgar Rivera - Desarrollador Full Stack & Blockchain</title>
      </Head>
  <Component {...pageProps} />
  </>)
}

export default appWithTranslation(MyApp);

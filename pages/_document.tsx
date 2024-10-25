import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta 
          name="description" 
          content="Portafolio de Edgar Rivera, desarrollador especializado en blockchain y aplicaciones web. Experto en Solana, Ethereum y desarrollo backend."
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

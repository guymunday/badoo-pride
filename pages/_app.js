import * as React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";
import "../styles/fonts.css";
import reset from "../styles/reset";
import global from "../styles/global";
import CookiesBanner from "../components/CookiesBanner";
import favicon from "../assets/favicon.ico";

const GlobalStyles = createGlobalStyle`
${reset}
${global}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href={favicon} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2KEKKY153W"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2KEKKY153W');`,
          }}
        />
      </Head>
      <GlobalStyles />
      <CookiesBanner />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

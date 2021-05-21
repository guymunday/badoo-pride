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

import * as React from "react";
import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";
import "../styles/fonts.css";
import reset from "../styles/reset";
import global from "../styles/global";
import CookiesBanner from "../components/CookiesBanner";

const GlobalStyles = createGlobalStyle`
${reset}
${global}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CookiesBanner />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

import Layout from "../components/Layout";
import { createGlobalStyle } from "styled-components";

import "../styles/fonts.css";
import reset from "../styles/reset";
import global from "../styles/global";

const GlobalStyles = createGlobalStyle`
${reset}
${global}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

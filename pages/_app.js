import * as React from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import { createGlobalStyle } from "styled-components";

import "../styles/fonts.css";
import reset from "../styles/reset";
import global from "../styles/global";
import LoadingScreen from "../components/LoadingScreen";

const GlobalStyles = createGlobalStyle`
${reset}
${global}
`;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoader(true);
    });

    router.events.on("routeChangeComplete", () => {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    });

    router.events.on("routeChangeError", () => {});
  }, []);

  return (
    <>
      <GlobalStyles />
      {/* {loader && <LoadingScreen />} */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

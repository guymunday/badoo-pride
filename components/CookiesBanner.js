import * as React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import favicon from "../assets/favicon.ico";
import Analytics from "./Analytics";
import { getCookie } from "../lib/getCookie";

export default function CookiesBanner() {
  const [cookiesAccepted, setCookiesAccepted] = React.useState(false);
  const router = useRouter();
  const { locale } = router;

  React.useEffect(() => {
    const cookieGA = getCookie("cookies_settings");
    if (cookieGA === "true") {
      setCookiesAccepted(true);
    } else {
      setCookiesAccepted(false);
    }
  }, []);

  return (
    <>
      {cookiesAccepted ? (
        <Analytics />
      ) : (
        <Head>
          <link rel="icon" type="image/ico" href={favicon} />
        </Head>
      )}
      <CookieConsent
        onAccept={() => setCookiesAccepted(true)}
        onDecline={() => setCookiesAccepted(false)}
        location="bottom"
        buttonText={
          locale === "es" ? (
            <>Aceptar todas</>
          ) : locale === "fr" ? (
            <>Tout accepter</>
          ) : (
            <>Accept all</>
          )
        }
        enableDeclineButton
        declineButtonText={
          locale === "es" ? (
            <>Disminución</>
          ) : locale === "fr" ? (
            <>Déclin</>
          ) : (
            <>Decline</>
          )
        }
        cookieName="cookies_settings"
        disableStyles={true}
        containerClasses="cookies-container"
        buttonWrapperClasses="cookies-buttons"
        contentClasses="cookies-inner"
      >
        {locale === "es" ? (
          <>
            Utilizamos cookies para que nuestra página funcione mejor. Esto
            incluye cookies analíticas y cookies publicitarias. Para obtener más
            información, visita nuestra{" "}
            <a href="https://badoo.com/es/cookie-policy/" target="_blank">
              Política de cookies.
            </a>
          </>
        ) : locale === "fr" ? (
          <>
            Nous utilisons des cookies pour mieux faire fonctionner notre site,
            ce qui inclut des cookies analytiques et des cookies publicitaires.
            Pour plus d'informations, consultez notre{" "}
            <a href="https://badoo.com/fr/cookie-policy/" target="_blank">
              Politique des cookies.
            </a>
          </>
        ) : (
          <>
            We use cookies to make our site work better. This includes analytics
            cookies and advertising cookies. For more information, please check
            our{" "}
            <a href="https://badoo.com/cookie-policy/" target="_blank">
              Cookie Policy.
            </a>
          </>
        )}
      </CookieConsent>
    </>
  );
}

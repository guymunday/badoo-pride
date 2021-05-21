import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";

export default function CookiesBanner() {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <CookieConsent
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
            <>Decline</>
          ) : locale === "fr" ? (
            <>Decline</>
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
            <a herf="https://badoo.com/es/cookie-policy/" target="_blank">
              Política de cookies.
            </a>
          </>
        ) : locale === "fr" ? (
          <>
            Nous utilisons des cookies pour mieux faire fonctionner notre site,
            ce qui inclut des cookies analytiques et des cookies publicitaires.
            Pour plus d'informations, consultez notre{" "}
            <a herf="https://badoo.com/fr/cookie-policy/" target="_blank">
              Politique des cookies.
            </a>
          </>
        ) : (
          <>
            We use cookies to make our site work better. This includes analytics
            cookies and advertising cookies. For more information, please check
            our{" "}
            <a herf="https://badoo.com/cookie-policy/" target="_blank">
              Cookie Policy.
            </a>
          </>
        )}
      </CookieConsent>
    </>
  );
}

import { useRouter } from "next/router";
import styled from "styled-components";
import FadeIn from "./FadeIn";
import SanitisedHtml from "./SanitisedHtml";

const SponsorMessage = styled.div`
  max-width: 700px;
  margin: 50px auto 100px auto;
`;

const FooterStyles = styled.footer`
  font-size: 16px;
  .footer-line {
    height: 1px;
    background: #fff;
    margin: 0 30px;
    @media screen and (max-width: 768px) {
      margin: 0 10px;
    }
  }
  .footer-inner {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 30px 10px;
    }
    .footer-left,
    .footer-right {
      * {
        margin-right: 1rem;
      }
    }
    .footer-left {
      @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function Footer({ data }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <FadeIn>
        <SponsorMessage>
          <SanitisedHtml center html={data?.sponsorMessage} />
        </SponsorMessage>
      </FadeIn>
      <FooterStyles>
        <div className="footer-line" />
        <div className="footer-inner">
          <div className="footer-left">
            <a href={data?.termsLink}>
              {locale === "es"
                ? "Términos"
                : locale === "fr"
                ? "Conditions"
                : "Terms"}
            </a>
            <a href={data?.privacyLink}>
              {locale === "es"
                ? "Privacidad"
                : locale === "fr"
                ? "Confidentialité"
                : "Privacy"}
            </a>
            <a href={data?.cookiesLink}>
              {locale === "es"
                ? "Política de cookies"
                : locale === "fr"
                ? "Politique des cookies"
                : "Cookies Policy"}
            </a>
          </div>
          <div className="footer-right">
            <a>{new Date().getFullYear()} © Badoo</a>
            <a href="https://www.wildishandco.co.uk">Site by Wildish & Co</a>
          </div>
        </div>
      </FooterStyles>
    </>
  );
}

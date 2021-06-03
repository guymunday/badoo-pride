import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { gsap } from "gsap";
import HideOnScroll from "./HideOnScroll";

const LanguagePickerContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--white);
  height: 30px;
  @media screen and (max-width: 320px) {
    padding: 20px 20px 30px 20px;
  }
  .language-picker-item {
    a {
      font-size: 20px;
      color: inherit;
      text-decoration: none;
    }
    span {
      @media screen and (max-width: 400px) {
        display: none;
      }
    }
  }
`;

export default function LanguagePicker() {
  const router = useRouter();
  const { asPath, locale } = router;
  const ref = React.useRef(null);

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => {
      gsap.to(ref.current, {
        opacity: 0,
      });
    });

    router.events.on("routeChangeComplete", () => {
      gsap.to(ref.current, {
        opacity: 1,
        delay: 0.5,
      });
    });
  }, []);

  const handleMouseOver = () => {
    gsap.to(ref.current, {
      duration: 0.3,
      css: {
        background: "#fff",
        color: "#6E3EFF",
        height: "auto",
      },
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      duration: 0.3,
      css: {
        background: "transparent",
        color: "white",
        height: "30px",
      },
    });
  };

  return (
      <>
        <HideOnScroll left={0}>
          <LanguagePickerContainer
              ref={ref}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
          >
            <div
                className="language-picker-item"
                style={{ order: locale === "en" ? -1 : null }}
            >
              <Link href={`${asPath}`} locale="en">
                {locale === "es" ? (
                    'Inglés'
                ) : locale === "fr" ? (
                    'Anglais'
                ) : (
                    'English'
                )}
              </Link>

              {locale === "en" && (
                  <span style={{ fontSize: 12, marginLeft: 5 }}>▼</span>
              )}
            </div>
            <div
                className="language-picker-item"
                style={{ order: locale === "es" ? -1 : null }}
            >
              <Link href={`${asPath}`} locale="es">
                {locale === "es" ? (
                    'Español'
                ) : locale === "fr" ? (
                    'Espagnol'
                ) : (
                    'Spanish'
                )}
              </Link>
              {locale === "es" && (
                  <span style={{ fontSize: 12, marginLeft: 5 }}>▼</span>
              )}
            </div>
            <div
                className="language-picker-item"
                style={{ order: locale === "fr" ? -1 : null }}
            >
              <Link href={`${asPath}`} locale="fr">
                {locale === "es" ? (
                    'Francés'
                ) : locale === "fr" ? (
                    'Français'
                ) : (
                    'French'
                )}
              </Link>
              {locale === "fr" && (
                  <span style={{ fontSize: 12, marginLeft: 5 }}>▼</span>
              )}
            </div>
          </LanguagePickerContainer>
        </HideOnScroll>
      </>
  );
}

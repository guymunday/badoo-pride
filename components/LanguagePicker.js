import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import { gsap } from "gsap";

const LanguagePickerContainer = styled.div`
  position: fixed;
  z-index: 99;
  padding: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--white);
  .language-picker-item {
    a {
      font-size: 20px;
      color: inherit;
      text-decoration: none;
    }
  }
`;

export default function LanguagePicker() {
  const router = useRouter();
  const { asPath, locale } = router;
  const ref = React.useRef(null);

  React.useEffect(() => {
    gsap.set(ref.current, {
      height: 30,
    });
  });

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
            English
          </Link>
        </div>
        <div
          className="language-picker-item"
          style={{ order: locale === "es" ? -1 : null }}
        >
          <Link href={`${asPath}`} locale="es">
            Español
          </Link>
        </div>
        <div
          className="language-picker-item"
          style={{ order: locale === "fr" ? -1 : null }}
        >
          <Link href={`${asPath}`} locale="fr">
            Français
          </Link>
        </div>
      </LanguagePickerContainer>
    </>
  );
}

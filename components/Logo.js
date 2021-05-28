import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import logoSvg from "../assets/badoo-logo.svg";

const LogoStyles = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 99;
  transform: translate(-50%, 0);
  cursor: pointer;
  padding: 30px;
  @media screen and (max-width: 320px) {
    padding: 40px;
  }
  img {
    object-fit: fill;
  }
`;

export default function Logo() {
  const logoRef = React.useRef(null);
  const [scroll, setScroll] = React.useState(false);

  const handleScolled = () => {
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 200) {
        setScroll(false);
        return;
      }

      if (currentScroll > lastScroll) {
        setScroll(true);
      } else if (currentScroll < lastScroll) {
        setScroll(false);
      }

      lastScroll = currentScroll;
    });
  };

  React.useEffect(() => {
    handleScolled();
  }, []);

  return (
    <>
      <LogoStyles style={{ top: scroll ? -100 : 0 }} ref={logoRef}>
        <Link href="/">
          <img src={logoSvg} alt="Badoo logo" />
        </Link>
      </LogoStyles>
    </>
  );
}

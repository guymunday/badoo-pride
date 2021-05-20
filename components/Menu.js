import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { gsap } from "gsap";
import RainbowBackgroundFade from "./RainbowBackgroundFade";

const Hamburger = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  padding: 30px;
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 98;
`;

export default function Menu({ data }) {
  const router = useRouter();
  const { locale } = router;

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = async () => {
    await setMenuOpen(false);
  };

  return (
    <>
      <Hamburger onClick={handleMenuOpen}>
        {locale === "es" ? "Menú" : "Menu"}
      </Hamburger>
      {menuOpen && (
        <Navigation>
          <RainbowBackgroundFade>
            <div style={{ height: 800 }} />
          </RainbowBackgroundFade>
        </Navigation>
      )}
    </>
  );
}

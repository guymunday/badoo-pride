import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { gsap } from "gsap";

const Hamburger = styled.div``;

const Navigation = styled.nav``;

export default function Menu({ data }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = async () => {
    await setMenuOpen(false);
  };

  return (
    <>
      <Hamburger></Hamburger>
      {menuOpen && <Navigation></Navigation>}
    </>
  );
}

import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import logoSvg from "../assets/badoo-logo.svg";

const LogoStyles = styled.div`
  position: absolute;
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
  return (
    <>
      <LogoStyles>
        <Link href="/">
          <img src={logoSvg} alt="Badoo logo" />
        </Link>
      </LogoStyles>
    </>
  );
}

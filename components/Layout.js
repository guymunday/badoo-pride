import * as React from "react";
import LanguagePicker from "./LanguagePicker";
import RainbowBackground from "./RainbowBackground";

export default function Layout({ children }) {
  return (
    <>
      <RainbowBackground>
        <LanguagePicker />
        <main>{children}</main>
        <footer>Footer</footer>
      </RainbowBackground>
    </>
  );
}

import * as React from "react";
import LanguagePicker from "./LanguagePicker";
// import RainbowBackground from "./RainbowBackground";
import RainbowBackgroundFade from "./RainbowBackgroundFade";
import Logo from "./Logo";

export default function Layout({ children }) {
  return (
    <>
      <RainbowBackgroundFade>
        <LanguagePicker />
        <Logo />
        <main>{children}</main>
      </RainbowBackgroundFade>
    </>
  );
}

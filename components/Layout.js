import * as React from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import LanguagePicker from "./LanguagePicker";
// import RainbowBackground from "./RainbowBackground";
import RainbowBackgroundFade from "./RainbowBackgroundFade";
import Logo from "./Logo";

export default function Layout({ children }) {
  const mainRef = React.useRef(null);
  const router = useRouter();

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => {
      gsap.to(mainRef.current, {
        opacity: 0,
      });
    });

    router.events.on("routeChangeComplete", () => {
      gsap.to(mainRef.current, {
        opacity: 1,
        delay: 0.5,
      });
    });
  }, []);

  return (
    <>
      <RainbowBackgroundFade>
        <LanguagePicker />
        <Logo />
        <main ref={mainRef}>{children}</main>
      </RainbowBackgroundFade>
    </>
  );
}

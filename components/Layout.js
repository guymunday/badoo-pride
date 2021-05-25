import * as React from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import LanguagePicker from "./LanguagePicker";
import RainbowBackgroundFade from "./RainbowBackgroundFade";
import Logo from "./Logo";

gsap.config({ nullTargetWarn: false });

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

  // const handleScolled = () => {
  //   let lastScroll = 0;

  //   window.addEventListener("scroll", () => {
  //     const currentScroll = window.pageYOffset;

  //     if (currentScroll <= 200) {
  //       setScroll(false);
  //       return;
  //     }

  //     if (currentScroll > lastScroll) {
  //       setScroll(true);
  //     } else if (currentScroll < lastScroll) {
  //       setScroll(false);
  //     }

  //     lastScroll = currentScroll;
  //   });
  // };

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

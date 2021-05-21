import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeIn({ children }) {
  const outerRef = React.useRef(null);
  const innerRef = React.useRef(null);

  React.useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(innerRef.current, {
      opacity: 0,
      y: 100,
    });
  }, []);

  return (
    <>
      <div ref={outerRef}>
        <div ref={innerRef}>{children}</div>
      </div>
    </>
  );
}

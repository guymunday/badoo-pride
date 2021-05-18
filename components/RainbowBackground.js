import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RainbowBackground({ children }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(ref.current, {
      css: {
        background: "#fc846d",
      },
    })
      .to(ref.current, {
        css: {
          background: "#ffa34e",
        },
      })
      .to(ref.current, {
        css: {
          background: "#04a39c",
        },
      })
      .to(ref.current, {
        css: {
          background: "#055499",
        },
      })
      .to(ref.current, {
        css: {
          background: "#6e3eff",
        },
      })
      .to(ref.current, {
        css: {
          background: "#370f7b",
        },
      });
  });

  return (
    <div
      style={{ background: "#ff4d88", padding: 10 }}
      ref={ref}
    >
      {children}
    </div>
  );
}

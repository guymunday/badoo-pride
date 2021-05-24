import * as React from "react";
import { gsap } from "gsap";

export default function RainbowBackgroundFade({ children }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    let tl = gsap.timeline({ repeat: -1 });

    tl.to(ref.current, {
      duration: 2,
      delay: 2,
      css: {
        background: "#fc846d",
      },
    })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#ffa34e",
        },
      })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#04a39c",
        },
      })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#055499",
        },
      })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#6e3eff",
        },
      })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#370f7b",
        },
      })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#FF4D88",
        },
      });
  }, []);

  return (
    <div
      style={{
        background: "#FF4D88",
        padding: 10,
        position: "relative",
      }}
      ref={ref}
    >
      {children}
    </div>
  );
}

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
        background: "#FF4D88",
      },
    })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#04A39C",
        },
      })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#FFA34E",
        },
      })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#FC846D",
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
          background: "#370f7b",
        },
      })
      .to(ref.current, {
        duration: 2,
        delay: 2,
        css: {
          background: "#6E3EFF",
        },
      });
  }, []);

  return (
    <div
      style={{
        background: "#6E3EFF",
        padding: 10,
        position: "relative",
      }}
      ref={ref}
    >
      {children}
    </div>
  );
}

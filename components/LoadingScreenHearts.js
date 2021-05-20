import * as React from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const LoadingDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export default function LoadingScreenHearts() {
  const refOne = React.useRef(null);
  const refTwo = React.useRef(null);
  const refThree = React.useRef(null);
  const refFour = React.useRef(null);
  const refFive = React.useRef(null);
  const refSix = React.useRef(null);
  const refSeven = React.useRef(null);

  React.useEffect(() => {
    let tl = gsap.timeline();

    tl.to(refOne.current, {
      xPercent: 100,
      duration: 0.4,
    })
      .to(refTwo.current, {
        xPercent: 100,
        duration: 0.4,
        delay: -0.1,
      })
      .to(refThree.current, {
        xPercent: 100,
        duration: 0.4,
        delay: -0,
      })
      .to(refFour.current, {
        xPercent: 100,
        duration: 0.4,
        delay: -0,
      })
      .to(refFive.current, {
        xPercent: 100,
        duration: 0.4,
        delay: -0.1,
      })
      .to(refSix.current, {
        xPercent: 100,
        duration: 0.4,
        delay: -0.1,
      })
      .to(refSeven.current, {
        xPercent: 100,
        duration: 0.4,
        delay: -0.1,
      });
  }, []);

  return (
    <>
      <LoadingDiv ref={refSeven} style={{ background: "var(--colour-7)" }} />
      <LoadingDiv ref={refSix} style={{ background: "var(--colour-6)" }} />
      <LoadingDiv ref={refFive} style={{ background: "var(--colour-5)" }} />
      <LoadingDiv ref={refFour} style={{ background: "var(--colour-4)" }} />
      <LoadingDiv ref={refThree} style={{ background: "var(--colour-3)" }} />
      <LoadingDiv ref={refTwo} style={{ background: "var(--colour-2)" }} />
      <LoadingDiv ref={refOne} style={{ background: "var(--colour-1)" }} />
    </>
  );
}

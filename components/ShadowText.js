import * as React from "react";
import styled from "styled-components";

const ShadowTextStyles = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 6rem;
    transition: 0.1s ease;
    color: white;
  }
`;

export default function ShadowText() {
  const containerRef = React.useRef(null);
  const textRef = React.useRef(null);

  const shadow = (e) => {
    const walk = 10;

    const { offsetHeight: height, offsetWidth: width } = containerRef.current;
    let { clientX: x, clientY: y } = e;

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    textRef.current.style.textShadow = `
      ${xWalk}px ${yWalk}px 1px red,
      ${xWalk * 2}px ${yWalk * 2}px 1px orange,
      ${xWalk * 3}px ${yWalk * 3}px 1px yellow,
      ${xWalk * 4}px ${yWalk * 4}px 1px green,
      ${xWalk * 5}px ${yWalk * 5}px 1px blue,
      ${xWalk * 6}px ${yWalk * 6}px 1px indigo,
      ${xWalk * 7}px ${yWalk * 7}px 1px violet
    `;
  };

  React.useEffect(() => {
    containerRef.current.addEventListener("mousemove", shadow);
  });

  return (
    <>
      <ShadowTextStyles ref={containerRef}>
        <h1 ref={textRef}>PRIDE</h1>
      </ShadowTextStyles>
    </>
  );
}

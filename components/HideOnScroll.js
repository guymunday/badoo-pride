import * as React from "react";
import styled from "styled-components";

const HideContainer = styled.div`
  position: fixed;
  z-index: 99;
  transition: 0.3 ease;
`;

export default function HideOnScroll({ left, right, children }) {
  const [scroll, setScroll] = React.useState(false);

  const handleScolled = () => {
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 200) {
        setScroll(false);
        return;
      }

      if (currentScroll > lastScroll) {
        setScroll(true);
      } else if (currentScroll < lastScroll) {
        setScroll(false);
      }

      lastScroll = currentScroll;
    });
  };

  React.useEffect(() => {
    handleScolled();
  }, []);

  return (
    <>
      <HideContainer style={{ top: scroll ? -100 : 0, left, right }}>
        {children}
      </HideContainer>
    </>
  );
}

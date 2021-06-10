import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: scroll;
  cursor: pointer;
  .modal-inner {
    padding: 30px;
  }
`;

export default function Modal({ children, ...rest }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <StyledModalOverlay {...rest}>
        <div className="modal-inner">{children}</div>
      </StyledModalOverlay>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

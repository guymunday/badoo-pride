import { css } from "styled-components";

const globalCss = css`
  :root {
    --colour-1: #ff4d88;
    --colour-2: #fc846d;
    --colour-3: #ffa34e;
    --colour-4: #04a39c;
    --colour-5: #055499;
    --colour-6: #6e3eff;
    --colour-7: #370f7b;
    --white: #fff;
  }

  body {
    font-family: "Mabry Pro", sans-serif;
    font-style: normal;
    font-size: 20px;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    color: var(--white);
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .windsor {
    font-family: "Windsor", sans-serif;
    font-weight: 700;
  }

  .letter-from {
    font-family: "Windsor Elongated", sans-serif;
    font-weight: 400;
    line-height: 1.1;
  }

  button {
    cursor: pointer;
    font-size: inherit;
    color: inherit;
    outline: none;
    border: none;
    background: transparent;
    :focus {
      outline: none;
    }
  }

  img {
    object-fit: cover;
  }

  .iframe-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default globalCss;

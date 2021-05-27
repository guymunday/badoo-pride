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

  a {
    font-size: inherit;
    color: inherit;
    cursor: pointer;
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

  ul {
    list-style-position: outside;
    margin-left: 18px !important;
    li {
      margin-bottom: 1rem !important;
    }
  }

  ol {
    list-style-position: outside;
    margin-left: 22px !important;
    li {
      margin-bottom: 1rem !important;
    }
  }

  .iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .sanitised-html {
    * {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
    }
    *:not(li) {
      margin: 0 auto 30px auto;
      &:last-child {
        margin: 0;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }

    .sanitised-img {
      display: block;
      max-width: 350px;
      width: 100%;
      margin: 10px auto !important;
    }

    .sanitised-anchor {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .cookies-container {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--colour-6);
    padding: 10px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      text-decoration: underline;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .cookies-inner {
    max-width: 700px;
  }

  .cookies-buttons {
    display: flex;
    margin-left: 10px;
    width: 400px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 600px) {
      margin-left: 0;
      margin-top: 10px;
      width: auto;
    }
  }

  #rcc-decline-button {
    text-decoration: underline;
  }

  #rcc-confirm-button {
    background: #fff;
    color: var(--colour-6);
    padding: 5px;
    border-radius: 5px;
    margin: 0 10px;
  }

  blockquote {
    text-align: center;
    font-family: "Windsor", sans-serif;
    font-weight: 700;
    font-size: 3rem !important;
    @media screen and (max-width: 768px) {
      font-size: 2rem !important;
    }
  }
`;

export default globalCss;

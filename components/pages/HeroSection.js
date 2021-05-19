import styled from "styled-components";
import { Image } from "react-datocms";

const HeroStyles = styled.section`
  width: 100%;
  min-height: calc(100vh - 20px);
  position: relative;
  overflow: hidden;
  .hero-image {
    position: absolute !important;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    @media screen and (min-width: 1200px) {
      transform: translate(-50%, -50%);
    }
  }
  .hero-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    text-align: center;
    width: 100%;
    .title {
      font-size: 6rem;
      text-transform: uppercase;
      line-height: 0.9;
      @media screen and (max-width: 600px) {
        font-size: 3rem;
      }
    }
    .letter-from {
      font-size: 3.7rem;
      margin-bottom: 20px;
      @media screen and (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }
`;

export default function HeroSection({ image, subtitle, title }) {
  return (
    <>
      <HeroStyles>
        {image && <Image data={image} className="hero-image" />}
        <div className="hero-title">
          <h3 className="letter-from">{subtitle}</h3>
          <h1 className="title">{title}</h1>
        </div>
      </HeroStyles>
    </>
  );
}

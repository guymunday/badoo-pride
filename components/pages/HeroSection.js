import styled from "styled-components";
import { Image } from "react-datocms";
import FadeIn from "../FadeIn";

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

const HeroTitle = styled.div`
  text-align: center;
  width: 100%;
  padding: 80px 10px 0 10px;
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
`;

export default function HeroSection({ image, subtitle, title }) {
  return (
    <>
      <HeroStyles>
        {image && (
          <Image data={image} className="hero-image" fadeInDuration={0} />
        )}
      </HeroStyles>
      <FadeIn>
        <HeroTitle>
          <h3 className="letter-from">{subtitle}</h3>
          <h1 className="title">{title}</h1>
        </HeroTitle>
      </FadeIn>
    </>
  );
}

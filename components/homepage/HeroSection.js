import styled from "styled-components";
import { Image } from "react-datocms";

const HeroStyles = styled.section`
  width: 100%;
  min-height: calc(100vh - 20px);
  position: relative;
  overflow: hidden;
  .hero-image {
    position: absolute !important;
    min-width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    @media screen and (min-width: 1200px) {
      transform: translate(-50%, -50%) scale(1.3);
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
      font-size: 8.5rem;
      line-height: 0.8;
      @media screen and (max-width: 600px) {
        font-size: 5rem;
      }
    }
    h3 {
      font-size: 3rem;
      line-height: 0.8;
      margin-bottom: 10px;
      @media screen and (max-width: 600px) {
        font-size: 1.7rem;
      }
    }
  }
`;

export default function HeroSection({ video, image, subtitle, title }) {
  return (
    <>
      <HeroStyles>
        {image && !video && <Image data={image} className="hero-image" />}
        {video && (
          <video className="hero-image" src={video} autoPlay muted loop />
        )}
        <div className="hero-title">
          <h3>{subtitle}</h3>
          <h1 className="letter-from title">{title}</h1>
        </div>
      </HeroStyles>
    </>
  );
}

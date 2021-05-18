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
  }
  .hero-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    text-align: center;
    .title {
      font-size: 7rem;
    }
  }
`;

export default function HeroSection({ data }) {
  return (
    <>
      <HeroStyles>
        {data?.homePage?.heroImage?.responsiveImage &&
          !data?.homePage?.heroVideo?.url && (
            <Image
              data={data?.homePage?.heroImage?.responsiveImage}
              className="hero-image"
            />
          )}
        {data?.homePage?.heroVideo?.url && (
          <video
            className="hero-image"
            src={data?.homePage?.heroVideo?.url}
            autoPlay
            muted
            loop
          />
        )}
        <div className="hero-title">
          <h3>{data?.homePage?.presents}</h3>
          <h1 className="letter-from title">{data?.homePage?.aLetterFrom}</h1>
        </div>
      </HeroStyles>
    </>
  );
}

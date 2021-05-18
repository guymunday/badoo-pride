import * as React from "react";
import styled from "styled-components";
import heartIcon from "../../assets/icons/heart-icon.svg";
import { gsap } from "gsap";

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.6rem;
`;

const CarouselStyles = styled.div`
  display: flex;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .carousel-button {
    width: 80px;
    height: 300px;
    background: transparent;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: none;
    }
    span {
      display: block;
      transform: rotate(-90deg);
    }
    &.carousel-button-next {
      span {
        transform: rotate(90deg);
      }
    }
  }

  .carousel-number-buttons {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    @media screen and (max-width: 768px) {
      position: relative;
      flex-direction: row;
      margin: 20px;
    }
    button {
      width: 70px;
      display: block;
      position: relative;
      z-index: 2;
      @media screen and (max-width: 768px) {
        width: 50px;
        font-size: 20px;
      }
      .heart-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
  }
`;

export default function Carousel({ data }) {
  const [slides, setSlides] = React.useState(0);

  React.useEffect(() => {
    gsap.from(".iframe-container", {
      opacity: 0,
      scale: 0.8,
    });
  }, [slides]);

  const handleNextButton = () => {
    setSlides(slides + 1 === data?.video?.videos.length ? 0 : slides + 1);
  };

  const handlePreviousButton = () => {
    setSlides(slides === 0 ? data?.video?.videos.length - 1 : slides - 1);
  };

  return (
    <>
      <div style={{ margin: "30px 0" }}>
        <Title>{data?.video?.title}</Title>
        <CarouselStyles>
          <button className="carousel-button" onClick={handlePreviousButton}>
            <span>Previous</span>
          </button>

          {data?.video?.videos.map((v, i) => {
            return (
              <>
                {slides === i && (
                  <>
                    {v?.videoUrl?.url.includes("youtu") && (
                      <div className="iframe-container">
                        <iframe
                          key={i}
                          title={v?.videoUrl?.title}
                          src={`https://www.youtube.com/embed/${v?.videoUrl?.providerUid}`}
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        />
                      </div>
                    )}
                  </>
                )}
              </>
            );
          })}

          <button
            className="carousel-button carousel-button-next"
            onClick={handleNextButton}
          >
            <span>Next</span>
          </button>

          <div className="carousel-number-buttons">
            {data?.video?.videos.map((b, i) => (
              <button
                onClick={() => setSlides(i)}
                style={{ color: slides === i ? "var(--colour-6)" : "" }}
              >
                {i + 1}
                {slides === i && (
                  <span className="heart-icon">
                    <img src={heartIcon} alt="" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </CarouselStyles>
      </div>
    </>
  );
}

// {
//   v?.videoUrl?.url.includes("vimeo") && (
//     <div className="iframe-container">
//       <iframe
//         key={i}
//         title={v?.videoUrl?.title}
//         src={`https://player.vimeo.com/video/${v?.videoUrl?.providerUid}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
//         frameborder="0"
//         allow="autoplay; fullscreen; picture-in-picture"
//         allowfullscreen
//       />
//     </div>
//   );
// }

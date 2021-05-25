import * as React from "react";
import styled from "styled-components";
import heartIcon from "../../assets/icons/heart-icon.svg";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import rightArrow from "../../assets/icons/arrow.svg";

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
        img {
          object-fit: fill;
        }
      }
    }
  }

  .mobile-arrows {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    bottom: 25px;
    z-index: 80;
    pointer-events: none;
    button {
      pointer-events: all;
    }
    .left-arrow {
      transform: rotate(180deg);
    }
    @media screen and (min-width: 768px) {
      display: none;
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
        transform: translate(-50%, -57%);
        z-index: -1;
        img {
          width: 35px;
          object-fit: fill;
        }
      }
    }
  }
`;

export default function Carousel({ data }) {
  const [slides, setSlides] = React.useState(0);
  // const [touchStart, setTouchStart] = React.useState(0);
  // const [touchEnd, setTouchEnd] = React.useState(0);

  const router = useRouter();
  const { locale } = router;

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

  // const handleTouchStart = (e) => {
  //   setTouchStart(e.targetTouches[0].clientX);
  // };

  // const handleTouchMove = (e) => {
  //   setTouchEnd(e.targetTouches[0].clientX);
  // };

  // const handleTouchEnd = () => {
  //   if (touchStart - touchEnd > 50) {
  //     handlePreviousButton();
  //   }

  //   if (touchStart - touchEnd < -50) {
  //     handleNextButton();
  //   }
  // };

  return (
    <>
      <div style={{ margin: "30px 0" }}>
        <Title>{data?.video?.title}</Title>
        <CarouselStyles>
          <button className="carousel-button" onClick={handlePreviousButton}>
            <span>
              {locale === "es"
                ? "Anterior"
                : locale === "fr"
                ? "Précédent"
                : "Previous"}
            </span>
          </button>

          {data?.video?.videos.map((v, i) => {
            return (
              <React.Fragment key={v?.videoUrl?.providerUid}>
                {slides === i && (
                  <>
                    {v?.videoUrl?.url.includes("youtu") && (
                      <div className="iframe-container">
                        <iframe
                          title={v?.videoUrl?.title}
                          src={`https://www.youtube.com/embed/${v?.videoUrl?.providerUid}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                    {v?.videoUrl?.url.includes("vimeo") && (
                      <div className="iframe-container">
                        <iframe
                          title={v?.videoUrl?.title}
                          src={`https://player.vimeo.com/video/${v?.videoUrl?.providerUid}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </>
                )}
              </React.Fragment>
            );
          })}

          <button
            className="carousel-button carousel-button-next"
            onClick={handleNextButton}
          >
            <span>
              {locale === "es"
                ? "Siguiente"
                : locale === "fr"
                ? "Suivant"
                : "Next"}
            </span>
          </button>

          <div className="carousel-number-buttons">
            {data?.video?.videos.map((b, i) => (
              <button
                key={`c-button-${i}`}
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

          <div className="mobile-arrows">
            <button onClick={handlePreviousButton}>
              <img className="left-arrow" src={rightArrow} />
            </button>
            <button onClick={handleNextButton}>
              <img src={rightArrow} />
            </button>
          </div>
        </CarouselStyles>
      </div>
    </>
  );
}

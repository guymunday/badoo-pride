import * as React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Image } from "react-datocms";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import eyesIcon from "../../assets/icons/eyes-icon.svg";

gsap.registerPlugin(ScrollTrigger);

const SeeMoreHeader = styled.div`
  display: flex;
  margin: 100px auto 0 auto;
  align-items: flex-end;
  justify-content: center;
  h2 {
    margin-right: 20px;
    font-family: "Mabry Pro", sans-serif;
    font-weight: 400;
  }
`;

const SeeMoreStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 50px;
  max-width: 1100px;
  margin: 60px auto 100px auto;
  @media screen and (max-width: 900px) {
    gap: 30px;
  }
  .see-more-inner {
    text-align: center;
    @media screen and (max-width: 768px) {
      grid-column: span 3;
    }
    .see-more-image {
      height: 325px;
      transition: 0.3s ease;
      :hover {
        transform: rotate(3deg);
      }
    }
    p {
      margin: 30px auto 10px auto;
      font-size: 17px;
    }
    h1 {
      text-transform: uppercase;
      line-height: 1.1;
      font-size: 30px;
    }
  }
`;

export default function SeeMore({ data, letterFrom }) {
  const outerRef = React.useRef(null);

  const router = useRouter();
  const { locale } = router;

  React.useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: outerRef.current,
        start: "top center",
        toggleActions: "play none none none",
      },
    });

    tl.from(".see-more-inner", {
      opacity: 0,
      y: 100,
      stagger: 0.2,
    });
  }, []);

  return (
    <>
      {data.length > 0 && (
        <>
          <SeeMoreHeader
            onClick={() => router.push(`/page/1#thumbnails`)}
            role="button"
            ref={outerRef}
          >
            <h2>
              {locale === "es"
                ? "Ver más"
                : locale === "fr"
                ? "Afficher plus"
                : "See more"}
            </h2>{" "}
            <img src={eyesIcon} alt="eyes icon" />
          </SeeMoreHeader>
          <SeeMoreStyles>
            {data?.map((t, i) => {
              return (
                <div
                  key={i}
                  className="see-more-inner"
                  onClick={() => router.push(`/${t?.slug}`)}
                  role="button"
                >
                  {t?.contentBlocks[0]?.heroImage?.responsiveImage && (
                    <Image
                      data={t?.contentBlocks[0]?.heroImage?.responsiveImage}
                      className="see-more-image"
                    />
                  )}
                  <p>{letterFrom}</p>
                  <h1>{t?.title}</h1>
                </div>
              );
            })}
          </SeeMoreStyles>
        </>
      )}
    </>
  );
}

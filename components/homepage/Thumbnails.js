import { useRouter } from "next/router";
import styled from "styled-components";
import { Image } from "react-datocms";
import rightArrow from "../../assets/icons/arrow.svg";
import eyesIcon from "../../assets/icons/eyes-icon.svg";

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto;
  gap: 50px;
  max-width: 1200px;
  margin: 120px auto;
  @media screen and (max-width: 768px) {
    gap: 30px;
  }
  .thumbnail-inner {
    text-align: center;
    grid-column: span 4;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      grid-column: span 5;
    }
    @media screen and (max-width: 500px) {
      grid-column: span 10;
    }
    :nth-child(2),
    :nth-child(3),
    :nth-child(6),
    :nth-child(7),
    :nth-child(10) {
      grid-column: span 6;
      .thumbnail-image {
        :hover {
          transform: rotate(-3deg);
        }
      }
      @media screen and (max-width: 768px) {
        grid-column: span 5;
      }
      @media screen and (max-width: 500px) {
        grid-column: span 10;
      }
    }
    .thumbnail-image {
      height: 400px;
      transition: 0.3s ease;
      :hover {
        transform: rotate(3deg);
      }
    }
    p {
      margin: 30px auto 10px auto;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: -50px auto 100px auto;
  .pagination-link {
    cursor: pointer;
    .left-arrow {
      transform: rotate(180deg);
    }
  }
`;

export default function Thumbnails({ data, aLetterFrom }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <ThumbnailGrid id="thumbnails">
        {data?.map((t, i) => {
          return (
            <>
              <div
                key={i}
                className="thumbnail-inner"
                onClick={() => router.push(`/${t?.slug}`)}
                role="button"
              >
                <Image
                  data={t?.contentBlocks[0]?.heroImage?.responsiveImage}
                  className="thumbnail-image"
                />
                <p>{aLetterFrom}</p>
                <h1 style={{ textTransform: "uppercase", lineHeight: 1.1 }}>
                  {t?.title}
                </h1>
              </div>
            </>
          );
        })}
      </ThumbnailGrid>
      {router.asPath !== "/" && (
        <Pagination>
          {parseInt(router.query.page) !== 1 && (
            <div
              className="pagination-link"
              onClick={() =>
                router.push(
                  `/page/${parseInt(router.query.page) - 1}#thumbnails`
                )
              }
            >
              <img className="left-arrow" src={rightArrow} alt="eyes icon" />{" "}
              {locale === "es"
                ? "Anterior"
                : locale === "fr"
                ? "Précédent"
                : "Previous"}
            </div>
          )}
          <div />
          {data.length > 7 && (
            <div
              className="pagination-link"
              onClick={() =>
                router.push(
                  `/page/${parseInt(router.query.page) + 1}#thumbnails`
                )
              }
            >
              <img src={eyesIcon} alt="eyes icon" />{" "}
              {locale === "es"
                ? "Siguiente"
                : locale === "fr"
                ? "Suivant"
                : "Next"}{" "}
              <img src={rightArrow} alt="right arrow icon" />
            </div>
          )}
        </Pagination>
      )}
      {router.asPath === "/" && (
        <Pagination>
          <div />
          {data.length > 7 && (
            <div
              className="pagination-link"
              onClick={() => router.push(`/page/2#thumbnails`)}
            >
              <img src={eyesIcon} alt="eyes icon" />{" "}
              {locale === "es"
                ? "Siguiente"
                : locale === "fr"
                ? "Suivant"
                : "Next"}{" "}
              <img src={rightArrow} alt="right arrow icon" />
            </div>
          )}
        </Pagination>
      )}
    </>
  );
}
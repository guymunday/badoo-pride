import styled from "styled-components";
import { Image } from "react-datocms";

const ImageWrapper = styled.div`
  max-width: 1100px;
  margin: 100px auto 60px auto;
  position: relative;
  @media screen and (max-width: 768px) {
    margin: 100px auto 90px auto;
  }
  .gallery-grid-item {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
`;

export default function FullwidthGallery({ images }) {
  return (
    <>
      <ImageWrapper>
        {images.map((img, i) => {
          return (
            <div key={i} className="gallery-grid-item">
              <Image
                data={img?.responsiveImage}
                className="gallery-grid-image"
              />
            </div>
          );
        })}
      </ImageWrapper>
    </>
  );
}

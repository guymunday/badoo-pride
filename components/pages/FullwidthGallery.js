import * as React from "react";
import styled from "styled-components";
import { Image } from "react-datocms";
import Modal from "../Modal";

const ImageWrapper = styled.div`
  max-width: 1100px;
  margin: 100px auto 60px auto;
  position: relative;
  @media screen and (max-width: 768px) {
    margin: 100px auto 90px auto;
  }
  .gallery-grid-item {
    margin-bottom: 40px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
`;

export default function FullwidthGallery({ images }) {
  const [showImageModal, setShowImageModal] = React.useState(false);
  const [imageIndex, setImageIndex] = React.useState(-1);

  return (
    <>
      <ImageWrapper>
        {images.map((img, i) => {
          return (
            <div
              key={i}
              className="gallery-grid-item"
              onClick={() => {
                setImageIndex(i);
                setShowImageModal(true);
              }}
            >
              <Image
                data={img?.responsiveImage}
                className="gallery-grid-image"
                fadeInDuration={100}
              />
            </div>
          );
        })}
      </ImageWrapper>
      {showImageModal && (
        <Modal onClick={() => setShowImageModal(false)}>
          <Image data={images[imageIndex].responsiveImage} />
        </Modal>
      )}
    </>
  );
}

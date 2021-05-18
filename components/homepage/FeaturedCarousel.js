import styled from "styled-components";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  EffectFade,
]);

const CarouselStyles = styled.div`
  /* padding: 100px; */
  position: relative;
  .swiper-pagination {
    
  }
  .swiper-pagination-bullet {
    background: var(--white);
  }
`;

export default function FeaturedCarousel({ data }) {
  return (
    <>
      <CarouselStyles>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel
          loop
          effect="fade"
        >
          {data?.video?.videos.map((v, i) => {
            return (
              <>
                {v?.videoUrl?.url.includes("youtu") && (
                  <SwiperSlide>
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
                  </SwiperSlide>
                )}
                {v?.videoUrl?.url.includes("vimeo") && (
                  <SwiperSlide>
                    <div className="iframe-container">
                      <iframe
                        key={i}
                        title={v?.videoUrl?.title}
                        src={`https://player.vimeo.com/video/${v?.videoUrl?.providerUid}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen
                      />
                    </div>
                  </SwiperSlide>
                )}
              </>
            );
          })}
        </Swiper>
      </CarouselStyles>
    </>
  );
}

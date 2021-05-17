import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

export default function FeaturedCarousel({ data }) {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        mousewheel
        loop
      >
        {data?.video?.videos.map((v, i) => {
          return (
            <>
              <SwiperSlide>
                <iframe
                  key={i}
                  src={v?.videoUrl?.url}
                  title={v?.videoUrl?.title}
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}

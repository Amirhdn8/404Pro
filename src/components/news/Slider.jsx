import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import NewsCard from "./NewsCard";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

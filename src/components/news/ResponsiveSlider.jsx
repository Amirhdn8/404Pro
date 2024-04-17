import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import NewsCard from "./NewsCard";

const ResponsiveSlider = () => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={false}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
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
      </Swiper>
    </>
  );
};

export default ResponsiveSlider;
